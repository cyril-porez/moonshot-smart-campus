import React, { useEffect, useState } from "react";
import Table from "../../../components/table/Table";
import Title from "../../../components/Title";
import { getActivitiesListAcc } from "../../../Services/GetActivitiesByAccomp";

export default function ActivityLaunch() {
  const [activities, setActivities] = useState([]);

  const getActivitiesByUser = async (id) => {
    try {
      const getActivities = await getActivitiesListAcc(36);
      return getActivities;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const test = await getActivitiesByUser(36);
      setActivities(test.activities);
      console.log(test);
    };
    fetchData();
  }, []);

  const datas = [
    {
      subject: "websocket",
      promo: "B2-Logiciel",
      nbVote: 10,
      date: "10/10/2024",
      hour: "14H30",
      accompagnateur: "Bob",
    },
    {
      subject: "websocket",
      promo: "B2-Logiciel",
      nbVote: 10,
      date: "10/10/2024",
      hour: "14H30",
      accompagnateur: "Bob",
    },
    {
      subject: "websocket",
      promo: "B2-Logiciel",
      nbVote: 10,
      date: "10/10/2024",
      hour: "14H30",
      accompagnateur: "Bob",
    },
    {
      subject: "websocket",
      promo: "B2-Logiciel",
      nbVote: 10,
      date: "10/10/2024",
      hour: "14H30",
      accompagnateur: "Bob",
    },
    {
      subject: "websocket",
      promo: "B2-Logiciel",
      nbVote: 10,
      date: "10/10/2024",
      hour: "14H30",
      accompagnateur: "Bob",
    },
    {
      subject: "websocket",
      promo: "B2-Logiciel",
      nbVote: 10,
      date: "10/10/2024",
      hour: "14H30",
      accompagnateur: "Bob",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="text-center mt-[3%]">
        <Title title="Lancer une activité" />
      </div>
      <div className=" flex justify-center mt-[3%]">
        <div className="w-4/5">
          <Table textButton="Lancer" datas={datas} />
        </div>
      </div>
    </div>
  );
}
