import React, { useEffect, useState } from "react";
import { ActivityTable } from "../../components/Tables";
import "../../style/CommonTable.css";
import { getActivitiesListAcc } from "../../Services/GetActivitiesByAccomp";

export function ActivityList() {
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
  return (
    <div className="common-table-body">
      <h1 className="common-table-title">{"Suivie d’activité"}</h1>
      <div className="common-table-container">
        <ActivityTable type={"suivi"} data={activities} />
      </div>
    </div>
  );
}
