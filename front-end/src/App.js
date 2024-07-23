import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import { ActivityStatus as ActivityStatusStudent } from "./Pages/Students/ActivityStatus";
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

function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [user, setUser] = useState({});

    const initUser = async () => {
        if(isLoggedIn()) {
            setUser(await getUserInfo());
        }
    }

    useEffect(() => {
        initUser();
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
                href: "/my-activites",
                text: "Mes activités",
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
            { icon: "/icons/notification.png", href: "/", text: "Notifications" },
        ],
        // Responsables
        [
            {
                icon: "/icons/stats.png",
                href: "/suivi-participation",
                text: "Suivi de participation",
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
                icon: "/icons/livre.png",
                href: "/propositions",
                text: "Consulter les propositions d'activité",
            },
            {
                icon: "/icons/remarques.png",
                href: "/notes-activite",
                text: "Note d'activité élève",
            },
            { icon: "/icons/notification.png", href: "/", text: "Notifications" },
        ],
        // Accompagnateur
        [
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
                href: "/calendar",
                text: "Voir mon planning",
            },
            {
                icon: "/icons/livre.png",
                href: "/propositions",
                text: "Consulter les propositions d'activité",
            },
            {
                icon: "/icons/remarques.png",
                href: "/notes-activite",
                text: "Note activité élève",
            },
            {
                icon: "/icons/emotion.png",
                href: "/ressenti",
                text: "Ressenti accompagnateur",
            },
            { icon: "/icons/notification.png", href: "/", text: "Notifications" },
        ],
    ];

    return (
        <div className="App">
            <Header currentUser={user} toggleSidebar={toggleSidebar} />
            <Modal
                isOpen={isModalOpen_SuggestActivity}
                onClose={closeModal_SuggestActivity}
            >
                <SuggestActivityForm closeModal={closeModal_SuggestActivity} />
            </Modal>
            <Sidebar
                isOpen={isSidebarOpen}
                onOpenModal_SuggestActivity={openModal_SuggestActivity}
                userType={user.status_role}
                links={navbarLinks[user.status_role?.id - 1]}
            />

            <main className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={<Dashboard props={{ user: user }} />}
                        />
                        {/* <Route path="/" element={<Home />} /> */}
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/nfc" element={<TestNfc />} />
                        <Route path="/Suivi" element={<Suivi />} />
                        <Route path="/Suivi2" element={<Suivi2 />} />

                        {/* Routes étudiants */}
                        {user.status_role?.name === "étudiant" ? (
                            <>
                                <Route
                                    path="/activity-done"
                                    element={<ActivityDoneStudent />}
                                />
                                <Route
                                    path="/activity-review"
                                    element={<ActivityReviewStudent />}
                                />
                                <Route
                                    path="/activity-status"
                                    element={<ActivityStatusStudent />}
                                />
                                <Route
                                    path="/activity-vote"
                                    element={<ActivityVoteStudent />}
                                />
                            </>
                        ) : null}

                        {/* Routes staff */}
                        {user.status_role?.name === "responsable" ? (
                            <>
                                <Route
                                    path="/notes-activite"
                                    element={<ActivityNotesStaff userType={user} />}
                                />
                                <Route path="/responsible-presence" element={<ResponsiblePresence />} />
                            </>
                        ) : user.status_role?.name === "Accompagnateur" ? (
                            <>
                                <Route
                                    path="/activity-review"
                                    element={<ActivityReviewStaff />}
                                />
                                <Route
                                    path="/activity-propositions"
                                    element={<ActivityPropositionsStaff />}
                                />
                                <Route path="/activity-list" element={<ActivityListStaff />} />
                                <Route path="/accompanying-presence" element={<AccompanyingPresence />} />
                            </>
                        ) : null}
                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;
