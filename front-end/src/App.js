import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./Pages/Auth/sign-in";
import SignUp from "./Pages/Auth/sign-up";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";
import SuggestActivityForm from "./components/NewActivity";

function App() {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    }
    const [isModalOpen_SuggestActivity, setModalOpen_SuggestActivity] = useState(false);
    const openModal_SuggestActivity = () => setModalOpen_SuggestActivity(true);
    const closeModal_SuggestActivity = () => setModalOpen_SuggestActivity(false);

    return (
        <div className="App">
            <Header currentUser={"Ibrahim"} toggleSidebar={toggleSidebar} /> 
            <Modal isOpen={isModalOpen_SuggestActivity} onClose ={closeModal_SuggestActivity}>
               <SuggestActivityForm/>
            </Modal>
            <Sidebar
                isOpen={isSidebarOpen}
                onOpenModal_SuggestActivity={openModal_SuggestActivity}
                links={[
                    { icon: "/icons/plus.png", href: "/", text: "Nouveau lien" },
                    { icon: "/icons/plus.png", href: "/", text: "Nouveau lien" },
                    { icon: "/icons/plus.png", href: "/", text: "Nouveau lien" }
                ]}
            />
            <main className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/sign-up" element={<SignUp />} />
                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;


