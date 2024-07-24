import React, { useEffect, useState } from "react";
import Timer from "../../components/Timer";
import Hourglass from "../../components/Hourglass";
import "../../style/Suivi.css";
import { useParams, useNavigate } from "react-router-dom";
import { getBadgesByActivity } from "../../Services/getBadges";
import { io } from "socket.io-client";
import { postUsersActivity as postUsersActivityService } from "../../Services/postUsersActivity";

/**
 * Page d'où les responsables/accompagnateurs pourront suivre la présence des élèves
 * en fonction des différents filtres
 */
export default function SuiviPresence() {
  const [badges, setBadges] = useState({});
  const { activityId } = useParams();
  const [uids, setUids] = useState([]);
  const [timeout, setTimeoutValue] = useState(500000);
  const [userBadgeMaping, setUserBadgeMapping] = useState([]);
  const [studentCount, setStudentCount] = useState(0);
  const [initialTime, setInitialTime] = useState(300);
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const navigate = useNavigate();

  const getBadgesByActities = async (id) => {
    try {
      const response = await getBadgesByActivity(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const postUserAttendActivity = async (userId, activityId) => {
    try {
      const response = await postUsersActivityService(userId, activityId);
      return response;
    } catch (error) {
      console.log("error test");
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const badges = await getBadgesByActities(activityId);
      setBadges(badges.attributes);
      setInitialTime(badges.attributes.time_to_badge * 60);
    };
    fetchData();
  }, [activityId]);

  useEffect(() => {
    console.log("Initial time set to:", initialTime);
  }, [initialTime]);

  useEffect(() => {
    const promos = badges?.promos_activitie?.data?.attributes?.promos?.data;
    if (!Array.isArray(promos)) {
      console.error(
        "La structure de l'objet JSON ne correspond pas à ce qui est attendu ou 'promos' n'est pas un tableau."
      );
      return;
    }
    const newUserBadgeMaping = [];
    promos.forEach((promo) => {
      const users = promo?.attributes?.users_permissions_users?.data;
      if (!Array.isArray(users)) {
        console.error(
          "La structure de l'objet JSON ne correspond pas à ce qui est attendu ou 'users' n'est pas un tableau."
        );
        return;
      }
      users.forEach((user) => {
        const username = user?.attributes?.username;
        const userId = user?.id;
        const badge = user?.attributes?.badge?.data.attributes.uid_crypt;
        const badgeIds = user?.attributes?.badge?.data;
        const badgeId = badgeIds?.id;

        if (username) {
          newUserBadgeMaping.push({
            userId: userId,
            username: username,
            badgeId: badgeId,
            badge: badge || null,
          });
        }
      });
    });
    console.log(userBadgeMaping, "tableau corespondance");
    setUserBadgeMapping(newUserBadgeMaping);
  }, [badges]);

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("connect", () => {
      console.log("Connecté au serveur Socket.io");
      socket.emit("set-timeout", initialTime * 1000);
    });

    socket.on("nfc-card", (data) => {
      console.log("UID reçu : ", data.uid);

      console.log(userBadgeMaping, "tableau corespondance");
      userBadgeMaping.forEach((infoUser) => {
        if (data.uid === infoUser.badge) {
          console.log(data.uid);
          console.log(infoUser.username);
          setUids((prevUids) => {
            const newUids = [...prevUids, infoUser.username];
            if (newUids.length > 5) {
              newUids.shift();
            }
            return newUids;
          });
          postUserAttendActivity(infoUser.userId, activityId);
          setStudentCount((prevCount) => prevCount + 1);
        }
      });
    });

    socket.on("disconnect", () => {
      console.log("Déconnecté du serveur Socket.io");
    });

    socket.on("connect_error", (err) => {
      console.error("Erreur de connexion Socket.io : ", err);
    });

    return () => {
      socket.disconnect();
    };
  }, [timeout, userBadgeMaping]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else {
      navigate(`/timer-activity/activityId/${activityId}`);
    }
  }, [timeLeft, navigate]);

  return (
    <div className="content">
      <div className="student-info">
        <span className="student-count">nombre d’élèves : {studentCount}</span>
        <ul className="student-list">
          {uids.map((uid, index) => (
            <li key={index}>{uid}</li>
          ))}
        </ul>
      </div>
      <div className="timer-container">
        <Timer timeLeft={timeLeft} />
      </div>
      <div className="hourglass-container">
        <Hourglass timeLeft={timeLeft} />
      </div>
    </div>
  );
}
