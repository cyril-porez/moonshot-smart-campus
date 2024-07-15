import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./Pages/Auth/sign-in";
import SignUp from "./Pages/Auth/sign-up";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Dashboard } from "./Pages/Staff/Dashboard";
import { Calendar } from "rsuite";
import { SelectInput } from "./components/FormInput";

function App() {

    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [userType, setUserType] = useState("student");

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
