import React, { act, useEffect, useState } from "react";
import { ActivityTable } from "../../components/Tables";
import { getFinishedActivity } from "../../Services/postUsersActivity";

/**
 * Liste des activités terminées, d'où les élèves pourront les évaluer
 */
export function ActivityDone() {
    const [activities, setActivities] = useState([]);

    const getActivities = async () => {
        const data = await getFinishedActivity();
        setActivities(data);
    }

    useEffect(() => {
        getActivities().then(data => console.log(data));
    }, []);

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Activités terminées</h1>
            <ActivityTable
                type={"evaluer"}
                data={activities}
            />
        </>
    )
}

function formatData(data) {
    let {promos, hourlies, durations, rooms} = [];

    data.map(activity => {
        promos.push(activity.attributes?.promos_activitie?.data?.attributes?.promos?.data);
        hourlies.push(activity.attributes?.Hourly);
        durations.push(activity.attributes?.time_activity)
        rooms.push(activity.attributes?.room?.data?.attributes?.name)
    })
    
    return []
}