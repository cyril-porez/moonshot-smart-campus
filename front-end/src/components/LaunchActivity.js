import React from 'react';

import "../style/LaunchActivity.css";

export default function LaunchActivity({ Subject, DateTime, EspectedTime, Room }) {

    return (
        <div >
            <form className="LaunchActivityBody">
                <h2 className='H2LaunchActivity'>Lancer L'activité ?</h2>
                <h3>{Subject}</h3>

                <p>le : {DateTime}</p>
                <p>Durée : {EspectedTime}min</p>
                <p>Salle {Room}</p>

                <input className="ButtonLaunchActivity" type="submit" value="Valider" />
            </form>


        </div>
    );
}
