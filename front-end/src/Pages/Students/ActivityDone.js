import React, { act, useEffect, useState } from "react";
import { getFinishedActivity } from "../../Services/postUsersActivity";
import { FinishedActivityTable } from "../../components/Tables";

/**
 * Liste des activités terminées, d'où les élèves pourront les évaluer
 */
export function ActivityDone() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        getFinishedActivity().then(data => {
            setActivities(data)
            console.log(formatData(data))
        });
    }, []);

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Activités terminées</h1>
            <FinishedActivityTable
                data={formatData(activities)}
            />
        </>
    )   
}

function formatData(data) {

    let _activities = [];

    let i = 0;
    data.map(activity => {
        let _activity = {
            id: activity.id,
            subject: activity.attributes?.subject,
            duration: activity.attributes?.time_activity + "h",
            Hourly: activity.attributes?.Hourly,
            promo: activity.attributes?.promos_activitie?.data?.attributes?.promos?.data[i].attributes?.name,
            room: activity.attributes?.room?.data?.attributes?.name
        }
        // durations.push(activity.attributes?.time_activity + "h")
        // hourlies.push(activity.attributes?.Hourly);
        // const promoNames = activity.attributes?.promos_activitie?.data?.attributes?.promos?.data[i].attributes?.name;
        // promos.push(promoNames);
        // rooms.push(activity.attributes?.room?.data?.attributes?.name)
        _activities.push(_activity)
        i++;
    })

    return _activities
}