import React from 'react';

import "../../style/modals/Refusal.css";

export default function Refusal({ Promo, Subject, closeModal}) {

    return (
        <div >
           <form className="body-refusal"> 
            <h2 className='h2-refusal'>Motif de Refus</h2>
            <h3>Promo : {Promo ? Promo : "Erreur - pas de promo"} </h3>
            <h3>Sujet : {Subject ? Subject : "Erreur - pas de sujet"} </h3>

            <textarea className="text-area-refusal" name="Refusal" id="Refusal" cols="30" rows="10" placeholder="Motif de refus"></textarea>

            <input className="button-refusal" type="submit" value="Valider"/>
            <button className="button-refusal" value="Fermer" onClick={closeModal}>Fermer</button>
           </form>


        </div>
    );
}