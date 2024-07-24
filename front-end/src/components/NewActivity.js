import React from 'react';
import { TagPicker } from 'rsuite';
import "../../style/modals/NewActivity.css";

export default function NewActivity({ closeModal, data = {} }) {
    //get all this from db
    const options = {
        activityTypes: ["HowTo", "cours", "Execution publique"],
        room: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "la Cave"],
        expectedTime: [15, 30, 45, 60, 90, 120],
        helper: ["Ruben", "Habib", "HABIBIIIIIIIIIII"],
        promo: ["B1", "B2", "B3"]
    };
    console.log(data)
    return (
       
        <div>
            
            <form className="activity-form">
                <h2 className="new-activity-title">Créer une nouvelle activité</h2>

                <select className="activity-type" name="ActivityType" id="ActivityType-select" defaultValue={data.activityTypes || ""} required>
                    <option hidden value="">Type d'activité</option>
                    {options.activityTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>

                <div className='row'>
                    <div className='column'>
                        <input type="text" placeholder="Sujet" defaultValue={data.subject || ""} required />
                        <input type="datetime-local" placeholder="Date" defaultValue={data.date || ""} required />

                        <select name="expectedTime" id="expectedTime-select" defaultValue={data.expectedTime || ""} required>
                            <option hidden value="">Temp Estimé</option>
                            {options.expectedTime.map((type, index) => (
                                <option key={index} value={type}>{type}min</option>
                            ))}
                        </select>
                    </div>
                    
                    <div className='column'>
                        <TagPicker className='tag-picker'
                            placeholder="Promo"
                            data={options.promo.map(item => ({ label: item, value: item }))}
                            required
                        />

                        <select name="room" id="room-select" defaultValue={data.room || ""} required>
                            <option hidden value="">Salle</option>
                            {options.room.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>

                        <select name="helper" id="helperSelect" defaultValue={data.helper || ""} required>
                            <option hidden value="">Accompagnateur</option>
                            {options.helper.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <input className='button-new-activity' type="submit" value="Valider" />
                <button className='button-new-activity' type="button" onClick={closeModal}>Fermer</button>
            </form>
        </div>
    );
}
