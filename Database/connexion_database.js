const mysql = require("mysql"); // importation du paquet mysql
require("dotenv").config;
const database = mysql.createConnection({
  // création d'un pool de connexion à la base de données
  connectionLimit: 5, // nombre maximum de création de connexion avec la base de données
  host: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DB_NAME,
});

database.connect((err) => {
  // Test de la connexion avec la base de données
  if (err) {
    return console.log(err.message); // Erreur de connexion
  }
  console.log("Connecté à MySQL !"); // Connexion réussie
});

module.exports = database;
