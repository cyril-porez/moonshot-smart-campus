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
    // one set of those for each modal
    const [isModalOpen_SuggestActivity, setModalOpen_SuggestActivity] = useState(false);
    const openModal_SuggestActivity = () => setModalOpen_SuggestActivity(true);
    const closeModal_SuggestActivity = () => setModalOpen_SuggestActivity(false);

    // one set of those for each modal
    const [isModalOpen_Test, setModalOpen_Test] = useState(false);
    const openModal_Test = () => setModalOpen_Test(true);
    const closeModal_Test = () => setModalOpen_Test(false);



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
