const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const nfcRoutes = require("./routes/nfcRoutes");
const initializeNfcMiddleware = require("./services/nfc");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let readerTimeout = 300000; // Durée par défaut de 5 minutes

// Initialiser le middleware NFC avec Socket.io
const nfcCardReader = initializeNfcMiddleware(io, readerTimeout);

app.use("/api/nfc", nfcRoutes);

app.set("nfcCardReader", nfcCardReader);

io.on("connection", (socket) => {
  console.log("Nouveau client connecté");

  socket.on("set-timeout", (time) => {
    console.log(`Temps de fonctionnement du lecteur mis à jour à : ${time} ms`);
    readerTimeout = time;
    nfcCardReader.setTimeout(time); // Mettez à jour la durée de fonctionnement du lecteur
  });

  socket.on("disconnect", () => {
    console.log("Client déconnecté");
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
