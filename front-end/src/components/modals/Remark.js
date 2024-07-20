import React from 'react';

import "../../style/modals/Remark.css";

export default function Remark({  Remark, closeModal }) {

    return (
        <div >
            <form className="remark-body">
                <h2 className='h2-remark'>Remarques :</h2>
                
                <p className='remark-content'>{Remark ? Remark : "Erreur - pas de remarque"}</p>
                <button className="button-remark" value="Fermer" onClick={closeModal}>Fermer</button>
           
            </form>


        </div>
    );
}
