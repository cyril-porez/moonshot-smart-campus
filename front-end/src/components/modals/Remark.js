import React from 'react';

import "../../style/modals/Remark.css";

export default function Remark({  Remark }) {

    return (
        <div >
            <form className="remark-body">
                <h2 className='h2-remark'>Remarques :</h2>
                
                <p className='remark-content'>{Remark}</p>
            </form>


        </div>
    );
}
