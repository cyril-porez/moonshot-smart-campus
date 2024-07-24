import React, { act, useEffect, useState } from "react";
import { FormButton } from "./Button";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import Refusal from "../components/modals/Refusal";
import NewActivity from "../components/modals/NewActivity";
import LaunchActivity from "../components/modals/LaunchActivity";

import "../style/Tables.css";
import Absence from "./modals/Absence";
import ShowRefusal from "./modals/ShowRefusal";
import { getUserInfo } from "../Services/UserInfo";



const splitHourly = (hourlyString) => {
    if (!hourlyString) return "Date inconnue";
    const [datePart] = hourlyString.split("T");
    const [year, month, day] = datePart.split("-");
    return `${day}-${month}-${year}`;
};

const splitTime = (hourlyString) => {
    if (!hourlyString) return "Heure inconnue";
    const [, timePart] = hourlyString.split("T");
    const [time] = timePart.split(".");
    return time;
};

const getPromoNames = (promos) => {
    if (promos && promos.length > 0) {
        return promos.map((promo) => promo.name).join(", ");
    }
    return "Aucune promotion";
};

export function ActivityTable({ data = [], type }) {
    const [userRole, setUserRole] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        getUserInfo().then(data => setUserRole(data.status_role.name))
    })

    const [modalState, setModalState] = useState({
        isOpen: false,
        type: null,
        activity: null,
    });

    const openModal = (type, activity) => setModalState({ isOpen: true, type, activity });
    const closeModal = () => setModalState({ isOpen: false, type: null, activity: null });

    const handleRefuseActivity = (activity) => openModal("refusal", activity);
    const handleValidateActivity = (activity) => openModal("newActivity", activity);
    const handleSuiviActivity = (activity) => openModal("suivi", activity);
    const handleShowRefusal = (activity) => openModal("showRefusal", activity);

    // Staff opinion of the activity
    function evaluateActivity(id) {
        navigate("/activity-review/" + id);
    }
    // Student opinion of the activity
    function rateActivity(id) {
        navigate("/activites-avis/" + id);
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
            case "showRefusal":
                return <ShowRefusal closeModal={closeModal} data={activity} />
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
                        {
                            type !== "status" ?
                                <>
                                    <th>Date</th>
                                    <th>Heure</th>
                                    <th>Durée</th>
                                    <th>Salle</th>
                                    <th></th>
                                </>
                                :
                                <>
                                    <th>Statut</th>
                                </>
                        }
                    </tr>
                </thead>
                <tbody className="table-body">
                    {data.map((activity) => (
                        <tr className="line" key={activity.id}>
                            <td>{activity.subject}</td>
                            <td>{getPromoNames(activity.promos_activitie?.promos)}</td>
                            {
                                type !== "status" ?
                                    <>
                                        <td>{splitHourly(activity.Hourly)}</td>
                                        <td>{splitTime(activity.Hourly)}</td>
                                        <td>{activity.time_activity}</td>
                                        <td>{activity.room?.name || "Non spécifié"}</td>
                                    </>
                                    :
                                    <>
                                    </>
                            }
                            <td>
                                {type === "suivi" ? (
                                    <FormButton
                                        variant={"jordy-blue"}
                                        text={"Lancer"}
                                        onClick={() => handleSuiviActivity(activity)}
                                    />
                                ) : type === "proposition" ? (
                                    <>
                                        <FormButton
                                            variant={"jordy-blue"}
                                            text={"Valider"}
                                            onClick={() => handleValidateActivity(activity)}
                                        />
                                        &nbsp;&nbsp;
                                        <FormButton
                                            variant={"white-blue"}
                                            text={"Refuser"}
                                            onClick={() => handleRefuseActivity(activity)}
                                        />
                                    </>
                                ) : type === "evaluer" ? (
                                    <FormButton
                                        variant={"jordy-blue"}
                                        text={"Evaluer"}
                                        onClick={
                                            userRole === "étudiant" ?
                                                () => rateActivity(activity.id) :
                                                () => evaluateActivity(activity.id)
                                        }
                                    />
                                ) : type === "status" ? (
                                    activity.status === "Validé" ? (
                                        <td style={{ color: 'green' }}>{activity.status}</td>
                                    ) :
                                        activity.status === "En attente" ? (
                                            <td style={{ fontStyle: 'italic' }}>{activity.status} ({activity.currentVotes} votes)</td>
                                        ) : (
                                            <FormButton
                                                variant={"jordy-blue"}
                                                text={"Voir le motif de refus"}
                                                onClick={() => handleShowRefusal(activity)}
                                            />
                                        )
                                ) : type === "vote" ? (
                                    <FormButton
                                        variant={"jordy-blue"}
                                        text={"Voter"}
                                        onClick={() => console.log("add vote to " + activity.id)}
                                    />
                                ) : null}
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

export function FinishedActivityTable({ data = [] }) {

    const navigate = useNavigate();

    function evaluateActivity(id) {
        navigate("/activity-review?id=" + id);
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
                        <th>Durée</th>
                        <th>Salle</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {data.map((activity) => (
                        <tr className="line" key={activity.id}>
                            <td>{activity.subject}</td>
                            <td>{activity.promo}</td>

                            <td>{splitHourly(activity.Hourly)}</td>
                            <td>{splitTime(activity.Hourly)}</td>
                            <td>{activity.duration}</td>
                            <td>{activity.room || "Non spécifié"}</td>
                            <td>
                                <FormButton
                                    variant={"jordy-blue"}
                                    text={"Evaluer"}
                                    onClick={() => evaluateActivity(activity.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export function ActivityPropositionsTable({ data = [] }) {

    const navigate = useNavigate();

    const [modalState, setModalState] = useState({
        isOpen: false,
        type: null,
        activity: null,
    });

    const openModal = (activity) => setModalState({ isOpen: true, activity });
    const closeModal = () => setModalState({ isOpen: false, type: null, activity: null });
    
    const handleSuiviActivity = (activity) => openModal("suivi", activity);

    const renderModalContent = () => {
        return <NewActivity closeModal={closeModal} />
    }

    return (
        <>
            <table>
                <thead>
                    <tr className="line">
                        <th>Sujet</th>
                        <th>Promo</th>
                        <th>Nb votes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {data.map((activity) => (
                        <tr className="line" key={activity.id}>
                            <td>{activity.attributes.subject}</td>
                            <td>{activity.attributes.promo.data.attributes.name}</td>
                            <td>{activity.attributes.nb_votes}</td>
                            <td>
                                <FormButton
                                    variant={"jordy-blue"}
                                    text={"Evaluer"}
                                    onClick={() => handleSuiviActivity(activity.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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
