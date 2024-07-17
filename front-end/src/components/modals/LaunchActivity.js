import React from 'react';

import "../../style/modals/LaunchActivity.css";

export default function LaunchActivity({ subject, dateTime, espectedTime, room, closeModal}) {

    return (
        <div >
            <form className="launch-activity-body">
                <h2 className='h2-launch-activity'>Lancer L'activité ?</h2>
                <h3>{subject ? subject : "Erreur - pas de sujet"}</h3>

                <p>le : {dateTime ? dateTime : "Erreur - pas de date"}</p>
                <p>Durée : {espectedTime ? espectedTime+"min" : "Erreur - pas de duration" }</p>
                <p>Salle {room ? room : "Erreur - pas de salle"}</p>

                <input className="button-activity-body" type="submit" value="Valider" />
                <button className="button-activity-body" value="Fermer" onClick={closeModal}>Fermer</button>
            </form>


        </div>
    );
}
