import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const App = () => {
  const [uids, setUids] = useState([]);
  const [timeout, setTimeoutValue] = useState(100000);

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("connect", () => {
      console.log("Connecté au serveur Socket.io");
      socket.emit("set-timeout", timeout); // envoie au serveur le temps pour badger
    });

    socket.on("nfc-card", (data) => {
      console.log("UID reçu : ", data.uid);
      setUids((prevUids) => {
        const newUids = [...prevUids, data.uid];
        if (newUids.length > 5) {
          newUids.shift(); // Supprimme le 1 er éléments de la liste
        }
        return newUids;
      });
    });

    socket.on("disconnect", () => {
      console.log("Déconnecté du serveur Socket.io");
    });

    socket.on("connect_error", (err) => {
      console.error("Erreur de connexion Socket.io : ", err);
    });

    return () => {
      socket.disconnect();
    };
  }, [timeout]); // Ajouter timeout comme dépendance pour que le useEffect se réexécute lorsque timeout change

  return (
    <div>
      <h1>NFC UID</h1>
      <div>
        <label>Durée de fonctionnement du lecteur (ms):</label>
      </div>
      <ul>
        {uids.map((uid, index) => (
          <li key={index}>{uid}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
