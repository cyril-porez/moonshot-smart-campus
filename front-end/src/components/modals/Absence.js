import React from 'react';

import "../../style/modals/Absence.css";

export default function Absence({ Name, Reason }) {

    return (
        <div >
            <form className="AbsenceBody">
                <h3 className='AbsenceName'>{Name}</h3>
                <h2 className='H2Absence'>Motif d'abscence</h2>
                

                <p className='AbsenceReason'>{Reason}</p>

                <input className="ButtonAbsence" type="submit" value="Valider" />
            </form>


        </div>
    );
}
