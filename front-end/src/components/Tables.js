import React, { useState } from "react";
import { FormButton } from "./Button";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import Refusal from "../components/modals/Refusal";
import NewActivity from "../components/modals/NewActivity"; // Assuming the NewActivity component is here

import "../style/Tables.css";

export function ActivityTable({ data = [], type }) {

    const navigate = useNavigate();

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [isNewActivityModalOpen, setNewActivityModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const openNewActivityModal = () => setNewActivityModalOpen(true);
    const closeNewActivityModal = () => setNewActivityModalOpen(false);

    const handleRefuseActivity = (activity) => {
        setSelectedActivity(activity);
        openModal();
    };

    const handleValidateActivity = (activity) => {
        setSelectedActivity(activity);
        openNewActivityModal();
    };

    function startActivity(id) {
        // startActivity logic
    }

    function rateActivity(id) {
        navigate("/ActivityReview?id=" + id);
    }

    return (
        <>
            <table>
                <thead>
                    <tr className="line">
                        <th>Sujet</th>
                        <th>Promo</th>
                        <th>Date</th>
                        <th>Heure</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {data.map(activity => (
                        <tr className="line" key={activity.id}>
                            <td>{activity.subject}</td>
                            <td>{activity.promo}</td>
                            <td>{activity.date}</td>
                            <td>{activity.time}</td>
                            <td>
                                {
                                    type === "suivi" ?
                                        (<FormButton text={"Lancer"} onClick={() => startActivity(activity.id)} />)
                                        : type === "proposition" ?
                                            (<>
                                                <FormButton text={"Valider"} onClick={() => handleValidateActivity(activity)} />
                                                <FormButton text={"Refuser"} onClick={() => handleRefuseActivity(activity)} />
                                            </>)
                                            : type === "evaluer" ?
                                                (<FormButton text={"Evaluer"} onClick={() => rateActivity(activity.id)} />)
                                                : null
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedActivity && (
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <Refusal
                        closeModal={closeModal}
                        data={selectedActivity}
                    />
                </Modal>
            )}

            {selectedActivity && (
                <Modal isOpen={isNewActivityModalOpen} onClose={closeNewActivityModal}>
                    <NewActivity
                        closeModal={closeNewActivityModal}
                        data={selectedActivity}
                    />
                </Modal>
            )}
        </>
    );
}
