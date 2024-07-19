import React from "react";
import { ActivityTable } from "../../components/Tables";

const data=[
    { id: 1, subject: "I want to kill myself", promo: "B2", activityTypes : "HowTo", helper : "Habib" , date: "2024-07-18", time: "18h20", expectedTime: 30, room: "A2" },
    
]

export function ActivityPropositions() {

    return (
        <>
            <h1>Activités terminées</h1>
            <ActivityTable type={"proposition"} data={data} />
        </>

    )
}