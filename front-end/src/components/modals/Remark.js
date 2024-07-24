import React from 'react';

import "../../style/modals/Remark.css";

export default function Remark({  data, closeModal }) {

    return (
        <div >
            <form className="remark-body">
                <h2 className='h2-remark'>Remarques :</h2>
                
                <p className='remark-content'>{data.remark ? data.remark : "Erreur - pas de remarque"}</p>
                <button className="button-remark" value="Fermer" onClick={closeModal}>Fermer</button>
           
            </form>


        </div>
    );
}
