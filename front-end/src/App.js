import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import SignIn from "./Pages/Auth/sign-in";
import SignUp from "./Pages/Auth/sign-up";
// import Home from "./Pages/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Dashboard } from "./Pages/Dashboard";
import { Calendar } from "rsuite";

import Modal from "./components/Modal";
import SuggestActivityForm from "./components/modals/NewActivity";

// STUDENT ROUTE
import PropositionStatus from "./Pages/Students/table/PropositionStatus";
import PropositionVote from "./Pages/Students/table/PropositionVote";
import ActivityToNote from "./Pages/Students/ActivityToNote";
import EvaluateActivityDone from "./Pages/Students/table/EvaluateActivityDone";

// STAFF ROUTE
import ActivityPropositions from "./Pages/Staff/table/ActivityPropositions";
import ActivityLaunch from "./Pages/Staff/table/ActivityLaunch";
import ListAbsentStudent from "./Pages/Staff/table/ListAbsentStudents";

import Suivi from "./Pages/Staff/timer/SuiviPresence";
import Suivi2 from "./Pages/Staff/timer/Suivi2";

import FeelingActivityByStudent from "./Pages/Staff/table/FeelingActivityByStudent";
import FeelingActivityByAccompaniyng from "./Pages/Staff/table/FeelingActivityByAccompanying";

import ActivityComplete from "./Pages/Staff/table/ActivityComplete";

import { getUserInfo, isLoggedIn } from "./Services/UserInfo";

import Test from "./Pages/test";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState({});

  // const initUser = async () => {
  //   if (isLoggedIn()) {
  //     setUser(await getUserInfo());
  //   }
  // };

  // useEffect(() => {
  //   // initUser();
  //   console.log(user);
  // }, []);

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
            <Route path="/test" element={<Test />} />
            <Route
              path="/"
              element={
                <Dashboard
                  props={{ user: user, onOpenModal: openModal_SuggestActivity }}
                />
              }
            />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/Suivi" element={<Suivi />} />
            <Route path="/Suivi2" element={<Suivi2 />} />

            {/* Student Route */}
            <Route path="/activities-to-note" element={<ActivityToNote />} />

            {/* tab */}
            <Route
              path="/activities-proposition-vote"
              element={<PropositionVote />}
            />
            <Route path="/proposition-status" element={<PropositionStatus />} />
            <Route
              path="/evaluate-finished-activity"
              element={<EvaluateActivityDone />}
            />

            {/* STAFF ROUTE */}
            <Route path="/activity-launch" element={<ActivityLaunch />} />
            <Route path="/propositions" element={<ActivityPropositions />} />
            <Route
              path="/list-absent-students"
              element={<ListAbsentStudent />}
            />
            <Route
              path="/Feeling-activity-student"
              element={<FeelingActivityByStudent />}
            />
            <Route
              path="/Feeling-activity-accompaniyng"
              element={<FeelingActivityByAccompaniyng />}
            />
            <Route path="/activity-complete" element={<ActivityComplete />} />

            {/* Routes étudiants */}
            {user?.status_role?.name === "étudiant" ? <></> : null}

            {/* Routes staff */}
            {user?.status_role?.name === "responsable" ? (
              <></>
            ) : user?.status_role?.name === "accompagnateur" ? (
              <></>
            ) : null}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
