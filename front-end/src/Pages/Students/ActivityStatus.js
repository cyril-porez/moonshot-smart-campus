import React from "react";
import { ActivityTable } from "../../components/Tables";

/**
 * Là où les élèves pourront voir l'avancée des votes, ou si leur activité à été refusée
 */
export function ActivityStatus() {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Statut des activités</h1>
            <ActivityTable type={"status"} data={generateFakeActivityStatus()} />
        </>
    )
}

function generateFakeActivityStatus() {
    const activities = [
        { id: 0, 
            subject: "Web Sockets C++", 
            promo: "B2 Logiciel", 
            status: "Validé"
        },
        { id: 1, 
            subject: "Pointeurs", 
            promo: "B2 Logiciel", 
            status: "En attente",
            currentVotes: 22,
            maxVotes: 40
        },
        { id: 2, 
            subject: "Strapi", 
            promo: "B2 Web", 
            status: "Refusé", 
            reason: "Déso mais flemme 😊" 
        },
    ]

    return activities
}