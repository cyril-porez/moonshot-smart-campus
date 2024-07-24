import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import SignIn from "./Pages/Auth/sign-in";
import SignUp from "./Pages/Auth/sign-up";
// import Home from "./Pages/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Dashboard } from "./Pages/Dashboard";
import { Calendar } from "rsuite";
import { SelectInput } from "./components/FormInput";
import Modal from "./components/Modal";
import SuggestActivityForm from "./components/modals/NewActivity";
import TestNfc from "./Pages/test-nfc";

import { ActivityDone as ActivityDoneStudent } from "./Pages/Students/ActivityDone";
import { ActivityReview as ActivityReviewStudent } from "./Pages/Students/ActivityReview";
import { ActivityStatus } from "./Pages/Students/ActivityStatus";
import { ActivityVote as ActivityVoteStudent } from "./Pages/Students/ActivityVote";
import { ActivityReview as ActivityReviewStaff } from "./Pages/Staff/ActivityReview";
import { AccompanyingPresence } from "./Pages/Staff/AccompanyingPresence";
import { ResponsiblePresence } from "./Pages/Staff/ResponsiblePresence";


import { ActivityPropositions as ActivityPropositionsStaff } from "./Pages/Staff/ActivityPropositions";
import { ActivityList as ActivityListStaff } from "./Pages/Staff/ActivityList";
import { ActivityNotes as ActivityNotesStaff } from "./Pages/Staff/ActivityNotes";

import Suivi from "./Pages/Staff/SuiviPresence";
import Suivi2 from "./Pages/Staff/Suivi2";
import { StudentTable } from "./components/Tables";
import { getUserInfo, isLoggedIn } from "./Services/UserInfo";
import { FeelingsStudents } from "./Pages/Staff/FeelingsStudents";
import { FeelingsAccompanying } from "./Pages/Staff/FeelingsAccompanying";
import ActivityAfterTimer from "./Pages/Staff/ActivityAfterTimer";

function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [user, setUser] = useState({});

    const initUser = async () => {
        if (isLoggedIn()) {
            setUser(await getUserInfo());
        }
    }

    useEffect(() => {
        initUser();
        console.log(user)
    }, [])

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    // one set of those for each modal
    const [isModalOpen_SuggestActivity, setModalOpen_SuggestActivity] =
        useState(false);
    const openModal_SuggestActivity = () => setModalOpen_SuggestActivity(true);
    const closeModal_SuggestActivity = () => setModalOpen_SuggestActivity(false);

    const navbarLinks = [
        // Etudiants
        [
            {
                icon: "/icons/activite.png",
                href: "/vote-activites",
                text: "Voter pour une proposition d'activité",
            },
            {
                icon: "/icons/liste-de-controle.png",
                href: "/activites-terminees",
                text: "Voir les activités terminées",
            },
            {
                icon: "/icons/agenda.png",
                href: "/calendar",
                text: "Voir mon planning",
            },
            {
                icon: "/icons/agenda.png",
                href: "/activites-status",
                text: "Voir le statut des activités",
            },
            { icon: "/icons/notification.png", href: "/", text: "Notifications" },
        ],
        // Accompagnateur
        [
            {
                icon: "/icons/livre.png",
                href: "/propositions",
                text: "Consulter les propositions d'activité",
            },
            {
                icon: "/icons/stats.png",
                href: "/suivi-participation",
                text: "Suivi de participation",
            },
            {
                icon: "/icons/activite.png",
                href: "/activites-terminees",
                text: "Voir les activités terminées",
            },
            {
                icon: "/icons/agenda.png",
                href: "/activity-list",
                text: "Voir les activités à venir",
            },
            {
                icon: "/icons/agenda.png",
                href: "/calendar",
                text: "Voir mon planning",
            },
            {
                icon: "/icons/remarques.png",
                href: "/notes-activite",
                text: "Ressenti d'activité élève",
            },
            { 
                icon: "/icons/notification.png", 
                href: "/", 
                text: "Notifications" 
            },
        ],
        // Responsables
        [
            {
                icon: "/icons/stats.png",
                href: "/suivi-participation",
                text: "Suivi de participation",
            },
            {
                icon: "/icons/remarques.png",
                href: "/notes-eleves",
                text: "Ressenti d'activité élève",
            },
            {
                icon: "/icons/remarques.png",
                href: "/notes-accompagnateur",
                text: "Ressenti d'activité accompagnateur",
            },
            {
                icon: "/icons/livre.png",
                href: "/propositions",
                text: "Consulter les propositions d'activité",
            },
            {
                icon: "/icons/agenda.png",
                href: "/calendar",
                text: "Voir mon planning",
            },
            {
                icon: "/icons/liste-de-controle.png",
                href: "/activites-terminees",
                text: "Voir les activités terminées",
            },
            { icon: "/icons/notification.png", href: "/", text: "Notifications" },
        ],
    ];

    return (
        <div className="App">
            <Modal
                isOpen={isModalOpen_SuggestActivity}
                onClose={closeModal_SuggestActivity}
            >
                <SuggestActivityForm closeModal={closeModal_SuggestActivity} />
            </Modal>

            <Router>
                <Header currentUser={user} toggleSidebar={toggleSidebar} />
                <Sidebar
                    isOpen={isSidebarOpen}
                    onOpenModal_SuggestActivity={openModal_SuggestActivity}
                    userType={user.status_role}
                    links={navbarLinks[user.status_role?.id - 1]}
                />
                <main className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
                    <Routes>
                        <Route
                            path="/"
                            element={<Dashboard props={{ user: user, onOpenModal: openModal_SuggestActivity }} />}
                        />
                        {/* <Route path="/" element={<Home />} /> */}
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/nfc" element={<TestNfc />} />
                        <Route path="/Suivi" element={<Suivi />} />
                        <Route path="/Suivi2" element={<Suivi2 />} />

                        {/* Routes étudiants */}
                        {user?.status_role?.name === "étudiant" ? (
                            <>
                                <Route
                                    path="/vote-activites"
                                    element={<ActivityVoteStudent />}
                                />
                                <Route
                                    path="/activites-terminees"
                                    element={<ActivityDoneStudent />}
                                />
                                <Route
                                    path="/activites-avis"
                                    element={<ActivityReviewStudent />}
                                />
                                <Route
                                    path="/activites-status"
                                    element={<ActivityStatus />}
                                />

                            </>
                        ) : null}

                        {/* Routes staff */}
                        {user?.status_role?.name === "responsable" ? (
                            <>
                                <Route
                                    path="/suivi-participation"
                                    element={<ResponsiblePresence />}
                                />
                                <Route
                                    path="/notes-eleves"
                                    element={<FeelingsStudents />}
                                />
                                <Route
                                    path="/propositions"
                                    element={<ActivityPropositionsStaff />}
                                />
                                <Route
                                    path="/notes-accompagnateur"
                                    element={<FeelingsAccompanying />}
                                />
                                <Route
                                    path="/activites-terminees"
                                    element={<ActivityDoneStudent />}
                                />
                                <Route
                                    path="/activites-status"
                                    element={<ActivityStatus />}
                                />                                
                            </>
                        ) : user?.status_role?.name === "accompagnateur" ? (
                            <>
                                <Route path="/activity-over" element={<ActivityAfterTimer />} />
                                <Route
                                    path="/activity-review"
                                    element={<ActivityReviewStaff />}
                                />
                                <Route
                                    path="/propositions"
                                    element={<ActivityPropositionsStaff />}
                                />
                                 <Route
                                    path="/suivi-participation"
                                    element={<AccompanyingPresence />}
                                />
                                <Route
                                    path="/activites-terminees"
                                    element={<ActivityDoneStudent />}
                                />
                                <Route
                                    path="/activity-list"
                                    element={<ActivityListStaff />}
                                />
                                <Route
                                    path="/notes-eleves"
                                    element={<FeelingsStudents />}
                                />
                            </>
                        ) : null}
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;
