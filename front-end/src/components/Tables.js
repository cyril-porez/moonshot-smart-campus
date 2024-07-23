import React, { useState } from "react";
import { FormButton } from "./Button";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import Refusal from "../components/modals/Refusal";
import NewActivity from "../components/modals/NewActivity";
import LaunchActivity from "../components/modals/LaunchActivity";

import "../style/Tables.css";

export function ActivityTable({ data = [], type }) {
  const navigate = useNavigate();

  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null,
    activity: null,
  });

  const openModal = (type, activity) =>
    setModalState({ isOpen: true, type, activity });
  const closeModal = () =>
    setModalState({ isOpen: false, type: null, activity: null });

  const handleRefuseActivity = (activity) => openModal("refusal", activity);
  const handleValidateActivity = (activity) =>
    openModal("newActivity", activity);
  const handleSuiviActivity = (activity) => openModal("suivi", activity);

  // Staff opinion of the activity
  function evaluateActivity(id) {
    navigate("/EvaluateActivity?id=" + id);
  }
  // Student opinion of the activity
  function rateActivity(id) {
    navigate("/ActivityReview?id=" + id);
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
      default:
        return null;
    }
  };

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
              <td>{getPromoNames(activity.promos_activitie?.promos)}</td>
              <td>{splitHourly(activity.Hourly)}</td>
              <td>{splitTime(activity.Hourly)}</td>
              <td>{activity.time_activity}</td>
              <td>{activity.room?.name || "Non spécifié"}</td>
              <td>
                {type === "suivi" ? (
                  <FormButton
                    text={"Lancer"}
                    onClick={() => handleSuiviActivity(activity)}
                  />
                ) : type === "proposition" ? (
                  <>
                    <FormButton
                      text={"Valider"}
                      onClick={() => handleValidateActivity(activity)}
                    />
                    <FormButton
                      text={"Refuser"}
                      onClick={() => handleRefuseActivity(activity)}
                    />
                  </>
                ) : type === "evaluer" ? (
                  <FormButton
                    text={"Evaluer"}
                    onClick={() => evaluateActivity(activity.id)}
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
