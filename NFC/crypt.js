const crypto = require("crypto");
const fs = require("fs");

// Fonction pour générer des octets aléatoires et les encoder en base64
function generateKeyIv(keyLength, ivLength) {
  const key = crypto.randomBytes(keyLength).toString("base64");
  const iv = crypto.randomBytes(ivLength).toString("base64");
  return { key, iv };
}

// Générer une clé de 32 octets et un IV de 16 octets
const { key, iv } = generateKeyIv(32, 16);

// Créer ou charger le fichier .env
const envFile = ".env";
let envData = "";

if (fs.existsSync(envFile)) {
  envData = fs.readFileSync(envFile, "utf8");
}

envData += `ENCRYPTION_KEY=${key}\n`;
envData += `ENCRYPTION_IV=${iv}\n`;

// Écrire les nouvelles variables dans le fichier .env
fs.writeFileSync(envFile, envData, "utf8");

console.log(`ENCRYPTION_KEY=${key}`);
console.log(`ENCRYPTION_IV=${iv}`);
console.log(`Les valeurs ont été sauvegardées dans le fichier ${envFile}.`);
