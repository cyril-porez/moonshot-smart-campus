import React from 'react';

import "../style/Refusal.css";

export default function Refusal({ Promo, Subject}) {

    return (
        <div >
           <form className="RefusalBody"> 
            <h2 className='H2Refusal'>Motif de Refus</h2>
            <h3>Promo : {Promo} </h3>
            <h3>Sujet : {Subject} </h3>

            <textarea className="textareaRefusal" name="Refusal" id="Refusal" cols="30" rows="10" placeholder="Motif de refus"></textarea>

            <input className="ButtonRefusal" type="submit" value="Valider"/>
           </form>


        </div>
    );
}
