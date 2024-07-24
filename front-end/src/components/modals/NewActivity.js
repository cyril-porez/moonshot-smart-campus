import React, { useEffect, useState } from 'react';
import { TagPicker } from 'rsuite';
import "../../style/modals/NewActivity.css";
import { getActivityTypes, getPromos } from '../../Services/ActivityService';
import { useForm } from "react-hook-form";

export default function NewActivity({ closeModal, data = {} }) {
    const { handleSubmit, register } = useForm();
    const [types, setTypes] = useState([]);
    const [promos, setPromos] = useState([]);

    useEffect(() => {
        async function fetchActivityTypes() {
            try {
                const response = await getActivityTypes();
                if (response.data && response.data.data) {
                    setTypes(response.data.data);
                } else {
                    console.error("Structure inattendue de la réponse pour les types d'activité:", response);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des types d'activité:", error);
            }
        }
        fetchActivityTypes();
    }, []);

    useEffect(() => {
        async function fetchPromos() {
            try {
                const response = await getPromos();
                if (response.data && response.data.data) {
                    setPromos(response.data.data);
                    console.log('Promos:', response.data.data);
                } else {
                    console.error("Structure inattendue de la réponse pour les promos:", response);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des promos:", error);
            }
        }
        fetchPromos();
    }, []);

    const options = {
        activityTypes: types.filter(type => type.attributes && type.attributes.name).map(type => ({
            id: type.id,
            name: type.attributes.name
        })),
        room: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "la Cave"],
        expectedTime: [15, 30, 45, 60, 90, 120],
        helper: ["Ruben", "Habib", "HABIBIIIIIIIIIII"],
        promo: promos.filter(promo => promo.attributes && promo.attributes.name).map(promo => ({
            id: promo.id,
            name: promo.attributes.name
        }))
    };

    const handleSelectChange = (event) => {
        console.log('Selected option value:', event.target.value);
    };

    const handlePromoChange = (value) => {
        // Affiche la valeur sélectionnée par le TagPicker dans la console
        console.log('Selected promo values:', value);
    };

    return (
        <div>
            <form className="activity-form">
                <h2 className="new-activity-title">Créer une nouvelle activité</h2>
                <select
                    className="activity-type"
                    name="ActivityType"
                    id="ActivityType-select"
                    defaultValue={data.activityTypes || ""}
                    required
                    onChange={handleSelectChange}
                    {...register("activity_type")}
                >
                    <option hidden value="">Type d'activité</option>
                    {options.activityTypes.map((type) => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                </select>
                <div className='row'>
                    <div className='column'>
                        <input type="text" placeholder="Sujet" defaultValue={data.subject || ""} required {...register("subject")} />
                        <input type="datetime-local" placeholder="Date" defaultValue={data.date || ""} required {...register("hourly")} />
                        <select
                            name="expectedTime"
                            id="expectedTime-select"
                            defaultValue={data.expectedTime || ""}
                            required
                            onChange={handleSelectChange}
                            {...register("time_activity")}
                        >
                            <option hidden value="">Temps Estimé</option>
                            {options.expectedTime.map((time, index) => (
                                <option key={index} value={time}>{time}min</option>
                            ))}
                        </select>
                    </div>
                    <div className='column'>
                        <TagPicker
                            className='tag-picker'
                            placeholder="Promo"
                            data={options.promo.map(item => ({
                                label: item.name,
                                value: item.id
                            }))}
                            required
                            onChange={handlePromoChange}
                            {...register("promo")}
                        />
                        <select
                            name="room"
                            id="room-select"
                            defaultValue={data.room || ""}
                            required
                            onChange={handleSelectChange}
                            {...register("room")}
                        >
                            <option hidden value="">Salle</option>
                            {options.room.map((room, index) => (
                                <option key={index} value={room}>{room}</option>
                            ))}
                        </select>
                        <select
                            name="helper"
                            id="helperSelect"
                            defaultValue={data.helper || ""}
                            required
                            onChange={handleSelectChange}
                            {...register("users_permissions_user")}
                        >
                            <option hidden value="">Accompagnateur</option>
                            {options.helper.map((helper, index) => (
                                <option key={index} value={helper}>{helper}</option>
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
