import React from "react";
import { ActivityTable } from "../../components/Tables";
import "../../style/CommonTable.css";

const data = [
    { id: 1, subject: "I want to kill myself", promo: "B2", activityTypes: "HowTo", helper: "Habib", date: "2024-07-18", time: "09h00", expectedTime: 30, room: "A2" },
    { id: 2, subject: "I want to kill myself", promo: "B2", activityTypes: "HowTo", helper: "bibou", date: "2024-07-18", time: "10h00", expectedTime: 30, room: "A2" },
    { id: 3, subject: "I want to kill myself", promo: "B2", activityTypes: "HowTo", helper: "Habib", date: "2024-07-18", time: "11h00", expectedTime: 30, room: "A2" },
    { id: 4, subject: "I want to kill myself", promo: "B2", activityTypes: "HowTo", helper: "Habib", date: "2024-07-18", time: "12h00", expectedTime: 30, room: "A2" },
    { id: 5, subject: "I want to kill myself", promo: "B1", activityTypes: "HowTo", helper: "Habibs", date: "2024-07-18", time: "13h00", expectedTime: 30, room: "A2" },
    { id: 6, subject: "I want to kill myself", promo: "B1", activityTypes: "HowTo", helper: "Habib", date: "2024-07-18", time: "14h00", expectedTime: 30, room: "A2" },
    { id: 7, subject: "I want to kill myself", promo: "B1", activityTypes: "HowTo", helper: "Habib", date: "2024-07-18", time: "15h00", expectedTime: 30, room: "A2" },
    { id: 8, subject: "I want to kill myself", promo: "B2", activityTypes: "HowTo", helper: "Habib", date: "2024-07-18", time: "16h00", expectedTime: 30, room: "A2" },
    { id: 9, subject: "I want to kill myself", promo: "B2", activityTypes: "HowTo", helper: "Habib", date: "2024-07-18", time: "17h00", expectedTime: 30, room: "A2" },
    { id: 10, subject: "I want to kill myself", promo: "B3", activityTypes: "HowTo", helper: "Habibi", date: "2024-07-18", time: "18h00", expectedTime: 30, room: "A2" },
    { id: 11, subject: "I want to kill myself", promo: "B3", activityTypes: "HowTo", helper: "Habib", date: "2024-07-18", time: "19h00", expectedTime: 30, room: "A2" },
    { id: 12, subject: "I want to kill myself", promo: "B3", activityTypes: "HowTo", helper: "Habib", date: "2024-07-18", time: "20h00", expectedTime: 30, room: "A2" },
]

export function ActivityList() {
    return (
        <div className="common-table-body">
            <h1 className="common-table-title">{"Suivie d’activité"}</h1>
            <div className="common-table-container">
                <ActivityTable type={"suivi"} data={data} />
            </div>
        </div>

    )
}
