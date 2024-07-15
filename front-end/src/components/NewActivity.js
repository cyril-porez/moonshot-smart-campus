import React from 'react';

import { TagPicker } from 'rsuite';

import "../style/NewActivity.css";

export default function NewActivity({ }) {

    /* Replace by db pull of activity types */
    const ActivityTypes = ["test1", "test2", "test3"];
    const Room = ["test1", "test2", "test3"];
    const EspectedTime = ["15min", "30min", "45min", "60min", "90min", "120min"];
    const Helper = ["RUBEN", "HABIB", "HABIBIIIIIIIII"];
    const Data = ["Tag1", "Tag2", "Tag3"]

    return (
        <div className="ActivityForm">
            <h2>Créer une nouvelle activité</h2>

            <select className="ActivityType" name="ActivityType" id="ActivityType-select">
                <option hidden value="">Type d'activité</option>
                {ActivityTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                ))}
            </select>


            <div className='Row'>
                <div className='Column'>
                    <input type="text" placeholder="Sujet" />

                    <input type="datetime-local" placeholder="Date" />

                    <select name="EspectedTime" id="EspectedTime-select">
                        <option hidden value="">Temp Estimé</option>
                        {EspectedTime.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                <div className='Column'>
                    <TagPicker className='TagPicker' data={Data.map(item => ({ label: item, value: item }))} />

                    <select name="Room" id="Room-select">
                        <option hidden value="">Salle</option>
                        {Room.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>

                    <select name="Helper" id="Helper-select">
                        <option hidden value="">Accompagnateur</option>
                        {Helper.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

            </div>


        </div>
    );
}
