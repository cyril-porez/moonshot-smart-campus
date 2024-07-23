import React, { useEffect, useState } from "react";
import { ActivityTable, generateFakeActivity } from "../../components/Tables";
import { getActivities } from "../../Services/ActivityInfo";

/**
 * Liste des activités terminées, d'où les élèves pourront les évaluer
 */
export function ActivityDone({ userRole }) {
    const [activities, setActivities] = useState([]);

    const initActivities = async () => {
        setActivities(await getActivities());
    }

    useEffect(() => {
        initActivities();
    }, [])

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Activités terminées</h1>
            <ActivityTable data={activities} userRole={userRole} type={"evaluer"} />
        </div>
    )
}