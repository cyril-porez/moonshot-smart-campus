import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./Pages/Auth/sign-in";
import SignUp from "./Pages/Auth/sign-up";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Dashboard } from "./Pages/Dashboard";
import { Calendar } from "rsuite";
import { SelectInput } from "./components/FormInput";
import Modal from "./components/Modal";
import SuggestActivityForm from "./components/NewActivity";

function App() {

    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [userType, setUserType] = useState("student");

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    }
    // one set of those for each modal
    const [isModalOpen_SuggestActivity, setModalOpen_SuggestActivity] = useState(false);
    const openModal_SuggestActivity = () => setModalOpen_SuggestActivity(true);
    const closeModal_SuggestActivity = () => setModalOpen_SuggestActivity(false);

    // one set of those for each modal
    const [isModalOpen_Test, setModalOpen_Test] = useState(false);
    const openModal_Test = () => setModalOpen_Test(true);
    const closeModal_Test = () => setModalOpen_Test(false);

    const navbarLinks = {
        students: [
            { icon: "/icons/activite.png", href: "/my-activites", text: "Mes activités" },
            { icon: "/icons/liste-de-controle.png", href: "/activites-terminees", text: "Voir les activités terminées" },
            { icon: "/icons/agenda.png", href: "/calendar", text: "Voir mon planning" },
            { icon: "/icons/notification.png", href: "/", text: "Notifications" },
        ],
        responsable: [
            { icon: "/icons/stats.png", href: "/suivi-participation", text: "Suivi de participation" },
            { icon: "/icons/liste-de-controle.png", href: "/activites-terminees", text: "Voir les activités terminées" },
            { icon: "/icons/agenda.png", href: "/calendar", text: "Voir mon planning" },
            { icon: "/icons/livre.png", href: "/propositions", text: "Consulter les propositions d'activité" },
            { icon: "/icons/remarques.png", href: "/notes-activite", text: "Note d'activité élève" },
            { icon: "/icons/notification.png", href: "/", text: "Notifications" },
        ],
        accompagnateur: [
            { icon: "/icons/stats.png", href: "/suivi-participation", text: "Suivi de participation" },
            { icon: "/icons/activite.png", href: "/activites-terminees", text: "Voir les activités terminées" },
            { icon: "/icons/agenda.png", href: "/calendar", text: "Voir mon planning" },
            { icon: "/icons/livre.png", href: "/propositions", text: "Consulter les propositions d'activité" },
            { icon: "/icons/remarques.png", href: "/notes-activite", text: "Note activité élève" },
            { icon: "/icons/emotion.png", href: "/ressenti", text: "Ressenti accompagnateur" },
            { icon: "/icons/notification.png", href: "/", text: "Notifications" },
        ]
    }
    


    return (
        <div className="App">

            <Header currentUser={"Ibrahim"} toggleSidebar={toggleSidebar} />

            {/* Modal is here because it is called by the sidebar */}
            <Modal isOpen={isModalOpen_SuggestActivity} onClose={closeModal_SuggestActivity}>
               <SuggestActivityForm/>
            </Modal>

            {/*  If there is need for another modal in the slidebar, it will be used like this
            <Modal isOpen={isModalOpen_Test} onClose={closeModal_Test}>
               content 
            </Modal>
            */}

            <Sidebar
                isOpen={isSidebarOpen}
                onOpenModal_SuggestActivity={openModal_SuggestActivity}
                onOpenModal_Test={openModal_Test}
                userType={userType}
                links={
                    userType === "student" ? 
                        navbarLinks.students :
                    userType === "accompagnateur" ?
                        navbarLinks.accompagnateur :
                    userType === "responsable" ?
                        navbarLinks.responsable :
                        null
                }
            />
            <main className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>

                {/* A CHANGER QUAND ON AURA MIS EN PLACE LE SYSTEME D'AUTH */}
                <SelectInput
                    legend={"Change user"}
                    options={[
                        "student", "accompagnateur", "responsable"
                    ]}
                    onChange={(e) => setUserType(e.target.value)}
                />
                
                <Router>
                    <Routes>
                        <Route path="/" element={<Dashboard props={{ user: userType }} />} />
                        {/* <Route path="/" element={<Home />} /> */}
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/calendar" element={<Calendar />} />
                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;
