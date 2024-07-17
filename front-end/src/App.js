import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./Pages/Auth/sign-in";
import SignUp from "./Pages/Auth/sign-up";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Suivi from "./Pages/Staff/Suivi";
import Suivi2 from "./Pages/Staff/Suivi2";


function App() {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className="App">
            <Header currentUser={"Ibrahim"} toggleSidebar={toggleSidebar} />
            <Sidebar
                isOpen={isSidebarOpen}
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
                        <Route path="/Suivi" element={<Suivi />} />
                        <Route path="/Suivi2" element={<Suivi2 />} />

                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;
