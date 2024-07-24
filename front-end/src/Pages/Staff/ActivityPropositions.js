import React, { useEffect, useState } from "react";
import { ActivityPropositionsTable } from "../../components/Tables";

import "../../style/CommonTable.css";
import { getOnHoldActivity } from "../../Services/postUsersActivity";

export function ActivityPropositions() {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        getOnHoldActivity().then(data => {
            console.log(data);
            setActivities(data);
        })
    }, [])

    return (
        <div className="common-table-body">
            <h1 className="common-table-title">Activités proposés</h1>
            <div className="common-table-container">
                <ActivityPropositionsTable data={activities} />
            </div>
            
        </div>

    )
}