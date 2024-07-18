import React from 'react';

import { TagPicker } from 'rsuite';

import "../../style/modals/NewActivity.css";

export default function NewActivity({ activityTypes, room , expectedTime, helper, promo, closeModal}) {

    return (
        <div >
            <form className="activity-form">
                <h2 className="new-activity-title">Créer une nouvelle activité</h2>

                <select className="activity-type" name="ActivityType" id="ActivityType-select" required>
                    <option hidden value="">Type d'activité</option>
                    {activityTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>


                <div className='row'>
                    <div className='column'>
                        <input type="text" placeholder="Sujet" required />

                        <input type="datetime-local" placeholder="Date" required />

                        <select name="expectedTime" id="expectedTime-select" required>
                            <option hidden value="">Temp Estimé</option>
                            {expectedTime.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div className='column'>
                        <TagPicker className='tag-picker' placeholder="Promo" data={promo.map(item => ({ label: item, value: item }))} required />

                        <select name="room" id="room-select" required>
                            <option hidden value="">Salle</option>
                            {room.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>

                        <select name="helper" id="helperSelect" required>
                            <option hidden value="">Accompagnateur</option>
                            {helper.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                </div>
                <input className='button-new-activity' type="submit" value="Valider" />
                <button className='button-new-activity' value="Fermer" onClick={closeModal}>Fermer</button>
            </form>

        </div>
    );
}