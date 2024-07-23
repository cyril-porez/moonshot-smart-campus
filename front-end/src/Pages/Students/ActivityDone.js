import React, { useEffect } from "react";
import { ActivityTable, generateFakeActivity } from "../../components/Tables";

/**
 * Liste des activités terminées, d'où les élèves pourront les évaluer
 */
export function ActivityDone({ userRole }) {

    useEffect(() => {
        console.log(userRole)
    }, [])

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Activités terminées</h1>
            <ActivityTable data={generateFakeActivity()} userRole={userRole} type={"evaluer"} />
        </div>
    )
}