import React from 'react';

import "../../style/modals/Absence.css";

export default function Absence({ name, reason, closeModal }) {

    return (
        <div className="absence-body">
           
                <h3 className='absence-name'>{name ? name : "Erreur - pas de Nom"}</h3>

                <h2 className='h2-absence'>Motif d'abscence</h2>
                
                <p className='absence-reason'>{reason ? reason : "Erreur - pas de raison" }</p>

                <button className="button-Absence" value="Fermer" onClick={closeModal}>Fermer</button>
            
        </div>
    );
}
