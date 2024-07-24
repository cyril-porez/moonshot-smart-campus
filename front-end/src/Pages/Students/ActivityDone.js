import React from "react";
import { ActivityTable } from "../../components/Tables";

/**
 * Liste des activités terminées, d'où les élèves pourront les évaluer
 */
export function ActivityDone() {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Activités terminées</h1>
            <ActivityTable
                type={"evaluer"}
                data={generateFakeActivity()}
            />
        </>
    )
}

function generateFakeActivity() {
    const activities = [
        { id: 0, 
            subject: "Web Sockets C++", 
            promo: "B2 Logiciel", 
            room: "Coworking",
        },
        { id: 1, 
            subject: "Pointeurs", 
            promo: "B2 Logiciel", 
            room: "Coworking",
        },
        { id: 2, 
            subject: "Strapi", 
            promo: "B2 Web", 
            room: "Coworking",
        },
    ]

    return activities
}