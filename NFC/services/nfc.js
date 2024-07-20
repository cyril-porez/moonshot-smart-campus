const { NFC } = require("nfc-pcsc");
const crypto = require("crypto");
const EventEmitter = require("events");
require("dotenv").config();

const encryptionKey = process.env.ENCRYPTION_KEY;
const encryptionIv = process.env.ENCRYPTION_IV;

console.log("encryption key => ", encryptionKey);
console.log("encryption iv => ", encryptionIv);

const algorithm = "aes-256-cbc";
const key = Buffer.from(encryptionKey, "base64");
const iv = Buffer.from(encryptionIv, "base64");

function encrypt(text) {
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString("hex") + ":" + encrypted.toString("hex");
}

class NFCCardReader extends EventEmitter {
  constructor(io, readerTimeout) {
    super();
    this.io = io;
    this.readerTimeout = readerTimeout;
    this.nfc = new NFC();
    this.readers = new Map(); // Stocke les lecteurs actifs
    this.startReading();
  }

  startReading() {
    this.nfc.on("reader", (reader) => {
      console.log(`${reader.reader.name} détecté`);

      reader.on("card", (card) => {
        const uid = card.uid;
        console.log(`Carte détectée avec UID : ${uid}`);

        const encryptedUID = encrypt(uid);
        console.log(`UID chiffré : ${encryptedUID}`);

        this.io.emit("nfc-card", { uid: encryptedUID });
      });

      reader.on("error", (err) => {
        console.error(`Erreur du lecteur : ${reader.reader.name}`, err);
      });

      reader.on("end", () => {
        console.log(`Lecteur ${reader.reader.name} déconnecté`);
        this.readers.delete(reader.reader.name);
      });

      this.readers.set(reader.reader.name, reader);
      this.setTimeout(this.readerTimeout, reader);
    });

    this.nfc.on("error", (err) => {
      console.error("Erreur NFC", err);
    });
  }

  setTimeout(readerTimeout, reader) {
    this.readerTimeout = readerTimeout;
    setTimeout(() => {
      console.log(
        `Arrêt du lecteur ${reader.reader.name} après ${this.readerTimeout} ms`
      );
      this.closeReader(reader); // Ferme le lecteur
    }, this.readerTimeout);
  }

  closeReader(reader) {
    reader
      .close()
      .then(() => {
        console.log(`Lecteur ${reader.reader.name} fermé avec succès`);
      })
      .catch((error) => {
        console.error(
          `Erreur lors de la fermeture du lecteur ${reader.reader.name}`,
          error
        );
      });
  }
}

module.exports = (io, readerTimeout) => {
  return new NFCCardReader(io, readerTimeout);
};
