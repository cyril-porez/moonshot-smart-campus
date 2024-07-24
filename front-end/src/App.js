import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext"; 
import SignIn from "./Pages/Auth/sign-in";
import SignUp from "./Pages/Auth/sign-up";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// import { Dashboard } from "./Pages/Dashboard";
import { SelectInput } from "./components/FormInput";
import Modal from "./components/Modal";
import SuggestActivityForm from "./components/modals/NewActivity";
import StudentRoutes from "./routes/StudentRoutes";
import ResponsibleRoutes from "./routes/ResponsibleRoutes";
import AccompagnateurRoutes from "./routes/AccompagnateurRoutes";

// Helper component to conditionally render routes
const ConditionalRoutes = ({ userType }) => {
  if (!userType) {
    return <SignIn />;
  }

  switch (userType) {
    case 'student':
      return <StudentRoutes />;
    case 'accompagnateur':
      return <AccompagnateurRoutes />;
    case 'responsable':
      return <ResponsibleRoutes />;
    default:
      return <Navigate to="/" />;
  }
};

function App() {
  // const { user, login, logout, message } = useAuth(); // Assurez-vous que useAuth est importé correctement

  const getLinksForUserType = (userType) => {
    switch (userType) {
      case 'student':
        return [
          { path: '/activity-done', label: 'Activity Done' },
          { path: '/activity-review', label: 'Activity Review' },
          { path: '/activity-status', label: 'Activity Status' },
          { path: '/activity-vote', label: 'Activity Vote' },
        ];
      case 'accompagnateur':
        return [
          { path: '/activity-review', label: 'Activity Review' },
          { path: '/activity-propositions', label: 'Activity Propositions' },
          { path: '/activity-list', label: 'Activity List' },
          { path: '/accompanying-presence', label: 'Accompanying Presence' },
        ];
      case 'responsable':
        return [
          { path: '/activity-review', label: 'Activity Review' },
          { path: '/activity-propositions', label: 'Activity Propositions' },
          { path: '/activity-list', label: 'Activity List' },
          { path: '/accompanying-presence', label: 'Accompanying Presence' },
        ];
      default:
        return [];
    }
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [userType, setUserType] = useState(""); // Default to empty string to show login page initially

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const [isModalOpen_SuggestActivity, setModalOpen_SuggestActivity] = useState(false);
  const openModal_SuggestActivity = () => setModalOpen_SuggestActivity(true);
  const closeModal_SuggestActivity = () => setModalOpen_SuggestActivity(false);

  // useEffect(() => {
  //   // This effect could be used to check if the user is authenticated and set userType accordingly
  //   if (user) {
  //     setUserType(user.type); // Assuming `user` has a `type` property
  //   }
  // }, [user]);

  return (
    <AuthProvider>
      <div className="App">
        <Header currentUser={"Ibrahim"} toggleSidebar={toggleSidebar} />
        <Modal isOpen={isModalOpen_SuggestActivity} onClose={closeModal_SuggestActivity}>
          <SuggestActivityForm closeModal={closeModal_SuggestActivity} />
        </Modal>
        <Sidebar
          isOpen={isSidebarOpen}
          onOpenModal_SuggestActivity={openModal_SuggestActivity}
          userType={userType}
          links={getLinksForUserType(userType)}
        />
        <main className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
          <SelectInput
            legend={"Change user"}
            options={["student", "accompagnateur", "responsable"]}
            onChange={(e) => setUserType(e.target.value)}
          />
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/sign-in" />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              {/* Conditionally render routes based on userType */}
              <Route path="*" element={<ConditionalRoutes userType={userType} />} />
            </Routes>
          </Router>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;


