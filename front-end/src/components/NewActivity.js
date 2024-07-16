import React from 'react';

import { TagPicker } from 'rsuite';

import "../style/NewActivity.css";

export default function NewActivity({ }) {

    /* Replace by db pull of activity types */
    const ActivityTypes = ["Cours", "HowTo", "Corrections","Execution Publique"];
    const Room = ["301", "201", "202","203","204","La Cave","205"];
    const EspectedTime = ["15min", "30min", "45min", "60min", "90min", "120min"];
    const Helper = ["RUBEN", "HABIB", "HABIBIIIIIIIII"];
    const Data = ["C", "C++", "Java","Web"]

    return (
        <div >
            <h2>Créer une nouvelle activité</h2>
            <form className="ActivityForm">

           
            <select className="ActivityType" name="ActivityType" id="ActivityType-select" required>
                <option hidden value="">Type d'activité</option>
                {ActivityTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                ))}
            </select>


            <div className='Row'>
                <div className='Column'>
                    <input type="text" placeholder="Sujet" required />

                    <input type="datetime-local" placeholder="Date" required />

                    <select name="EspectedTime" id="EspectedTime-select" required>
                        <option hidden value="">Temp Estimé</option>
                        {EspectedTime.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                <div className='Column'>
                    <TagPicker className='TagPicker' placeholder="Promo" data={Data.map(item => ({ label: item, value: item }))} required/>

                    <select name="Room" id="Room-select" required>
                        <option hidden value="">Salle</option>
                        {Room.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>

                    <select name="Helper" id="Helper-select" required>
                        <option hidden value="">Accompagnateur</option>
                        {Helper.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

            </div>
            <input className='SubmitButton' type="submit" value="Valider" />
            </form>

        </div>
    );
}