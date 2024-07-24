import React, { useState } from "react";
import { FormButton } from "./Button";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import Refusal from "../components/modals/Refusal";
import NewActivity from "../components/modals/NewActivity";
import LaunchActivity from "../components/modals/LaunchActivity";

import "../style/Tables.css";
import Absence from "./modals/Absence";

export function ActivityTable({ data = [], type }) {
    const navigate = useNavigate();

    const [modalState, setModalState] = useState({
        isOpen: false,
        type: null,
        activity: null,
    });

    const openModal = (type, activity) =>
        setModalState({ isOpen: true, type, activity });
    const closeModal = () =>
        setModalState({ isOpen: false, type: null, activity: null });

    const handleRefuseActivity = (activity) => openModal("refusal", activity);
    const handleValidateActivity = (activity) =>
        openModal("newActivity", activity);
    const handleSuiviActivity = (activity) => openModal("suivi", activity);

    // Staff opinion of the activity
    function evaluateActivity(id) {
        navigate("/EvaluateActivity?id=" + id);
    }
    // Student opinion of the activity
    function rateActivity(id) {
        navigate("/ActivityReview?id=" + id);
    }

    const renderModalContent = () => {
        const { type, activity } = modalState;
        switch (type) {
            case "refusal":
                return <Refusal closeModal={closeModal} data={activity} />;
            case "newActivity":
                return <NewActivity closeModal={closeModal} data={activity} />;
            case "suivi":
                return <LaunchActivity closeModal={closeModal} data={activity} />;               
            default:
                return null;
        }
    };

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
                    {data.map((activity) => (
                        <tr className="line" key={activity.id}>
                            <td>{activity.subject}</td>
                            <td>{activity.promo}</td>
                            <td>{activity.date}</td>
                            <td>{activity.time}</td>
                            <td>
                                {type === "suivi" ? (
                                    <FormButton
                                        text={"Lancer"}
                                        onClick={() => handleSuiviActivity(activity)}
                                    />
                                ) : type === "proposition" ? (
                                    <>
                                        <FormButton
                                            text={"Valider"}
                                            onClick={() => handleValidateActivity(activity)}
                                        />
                                        <FormButton
                                            text={"Refuser"}
                                            onClick={() => handleRefuseActivity(activity)}
                                        />
                                    </>
                                ) : type === "evaluer" ? (
                                    <FormButton
                                        text={"Evaluer"}
                                        onClick={() => evaluateActivity()}
                                    />
                                )  : type === "vote" ? (
                                    <FormButton
                                        text={"Voter"}
                                        onClick={() =>  console.log("add vote to "+activity.id)}
                                    />
                                )
                                : null}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {modalState.isOpen && (
                <Modal isOpen={modalState.isOpen} onClose={closeModal}>
                    {renderModalContent()}
                </Modal>
            )}
        </>
    );
}

export function StudentTable({ data = [] }) {
    const [modalState, setModalState] = useState({
        isOpen: false,
        name: null,
        reason: null
    });

    const openModal = (name, reason) => setModalState({ isOpen: true, name, reason });
    const closeModal = () => setModalState({ isOpen: false });

    const handleReadAbsence = (student) => () => openModal(student.name, student.reason);

    const renderModalContent = () => {
        return <Absence closeModal={closeModal} name={modalState.name} reason={modalState.reason} />
    };

    return (
        <>
            <table>
                <thead>
                    <tr className="line">
                        <th>Nom</th>
                        <th>Promo</th>
                        <th>Date</th>
                        <th>Sujet</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {data.map((student) => (
                        <tr className="line" key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.promo}</td>
                            <td>{student.date}</td>
                            <td>{student.subject}</td>
                            <td>
                                <FormButton onClick={handleReadAbsence(student)} text={"Voir motif"} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {modalState.isOpen && (
                <Modal isOpen={modalState.isOpen} onClose={closeModal}>
                    {renderModalContent()}
                </Modal>
            )}
        </>
    );
}

export function generateFakeStudentData(numStudents = 10) {
    const promos = ["B2 Logiciel", "B3 Logiciel", "M1 Logiciel"];
    const subjects = ["HOW TO Python", "HOW TO JAVA", "HOW TO C", "HOW TO CPP"];
    const reasons = ["Maladie", "Voyage", "Problème familial", "Autre"];

    return Array.from({ length: numStudents }, (_, index) => ({
        id: index + 1,
        name: `Étudiant ${index + 1}`,
        promo: promos[Math.floor(Math.random() * promos.length)],
        date: new Date(Date.now() - Math.random() * 1e10).toLocaleDateString("fr-FR"),
        subject: subjects[Math.floor(Math.random() * subjects.length)],
        reason: reasons[Math.floor(Math.random() * reasons.length)],
    }));
}
