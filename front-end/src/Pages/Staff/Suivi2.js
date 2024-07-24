import React, { useState, useEffect } from "react";
import "../../style/Suivi2.css";
import Sablier from "../../components/Sablier";
import { getUsersByActivity } from "../../Services/getUsersByActivities";
import { useParams } from "react-router-dom";
import { getStudentPresentActivity } from "../../Services/getStudentPresentActivities";

const Suivi2 = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [totalTime] = useState(660); // 11 minutes in seconds
  const { activityId } = useParams();
  const [totalStudents, setTotalStudents] = useState(0);
  const [studentPres, setStudentPres] = useState(0);

  const getUsers = async (id) => {
    try {
      const response = await getUsersByActivity(id);
      if (response && response.attributes && response.attributes.promos_activitie && response.attributes.promos_activitie.data) {
        return response;
      } else {
        console.error('Unexpected response structure from getUsersByActivity:', response);
        return { attributes: { promos_activitie: { data: [] } } }; // Provide a default value
      }
    } catch (error) {
      console.log(error);
      return { attributes: { promos_activitie: { data: [] } } }; // Provide a default value
    }
  };

  const getStudentPresent = async (id) => {
    try {
      const response = await getStudentPresentActivity(id);
      if (response && response.users_activities && response.users_activities.data) {
        return response;
      } else {
        console.error('Unexpected response structure from getStudentPresentActivity:', response);
        return { users_activities: { data: [] } }; // Provide a default value
      }
    } catch (error) {
      console.log(error);
      return { users_activities: { data: [] } }; // Provide a default value
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const studentPresResponse = await getStudentPresent(activityId);
      setStudentPres(studentPresResponse.users_activities.data.length || 0);
      console.log(studentPresResponse.users_activities.data.length || 0);
    };
  
    fetchData();
  }, [activityId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getUsers(activityId);
        console.log(users);

        const promos =
          users?.attributes?.promos_activitie?.data?.attributes?.promos?.data;

        if (!promos) {
          console.error("Promos is undefined");
          return;
        }

        let studentCount = 0;

        promos.forEach((promo) => {
          const usersList = promo?.attributes?.users_permissions_users?.data;

          if (!usersList) {
            console.warn("Users list is undefined for promo", promo);
            return;
          }
          studentCount += usersList.length;

          usersList.forEach((user) => {
            console.log(user);
          });
        });
        setTotalStudents(studentCount);
        console.log(studentCount, "students");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [activityId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}m ${s}s`;
  };

  return (
    <div className="app">
      <div className="header">
        <div className="student-count">
          nombre d'élèves : {studentPres} / {totalStudents}
        </div>
        <div className="total-time">{formatTime(totalTime)}</div>
      </div>
      <div className="timer">
        <Sablier />
        <div className="time-left">{formatTime(timeLeft)} restantes</div>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${(timeLeft / totalTime) * 100}%` }}
          ></div>
          <div
            className="progress-blue"
            style={{ width: `${((totalTime - timeLeft) / totalTime) * 100}%` }}
          ></div>
        </div>
      </div>
      <button className="absent-students-btn">Voir les élèves absents</button>
    </div>
  );
};

export default Suivi2;
