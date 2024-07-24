import React, { useState, useEffect } from "react";
import "../../style/Suivi2.css";
import Timer from "../../components/Timer";
import Hourglass from "../../components/Hourglass";
import { getUsersByActivity } from "../../Services/getUsersByActivities";
import { useNavigate, useParams } from "react-router-dom";
import { getStudentPresentActivity } from "../../Services/getStudentPresentActivities";

const Suivi2 = () => {
  const { activityId } = useParams();
  const [totalStudents, setTotalStudents] = useState(0);
  const [studentPres, setStudentPres] = useState(0);
  const [initialTime, setInitialTime] = useState(300);
  const [timeLeft, setTimeLeft] = useState(initialTime);

  const navigate = useNavigate();

  const getUsers = async (id) => {
    try {
      const response = await getUsersByActivity(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const getStudentPresent = async (id) => {
    try {
      const response = await getStudentPresentActivity(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Initial time set to:", initialTime);
  }, [initialTime]);

  useEffect(() => {
    const fetchData = async () => {
      const getStudentPres = await getStudentPresent(activityId);
      setStudentPres(getStudentPres.users_activities.data.length);
      setInitialTime(getStudentPres.time_activity * 60 * 60);
      console.log(getStudentPres);
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
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else {
      navigate(`/activity-over/activityId/${activityId}`);
    }
  }, [timeLeft, navigate]);

  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  return (
    <div className="app">
      <div className="header">
        <div className="student-count">
          nombre d'élèves : {studentPres} / {totalStudents}
        </div>
      </div>
      <div className="timer">
        <div className="timer-container">
          <Timer timeLeft={timeLeft} />
        </div>
        <div className="hourglass-container">
          <Hourglass timeLeft={timeLeft} />
        </div>
      </div>
      <button className="absent-students-btn">Voir les élèves absents</button>
    </div>
  );
};

export default Suivi2;
