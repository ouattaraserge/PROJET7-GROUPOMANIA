const express = require("express");
const app = express();
const helmet = require("helmet");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");
const path = require("path");

//Routes
const userRoutes = require("./routes/user");

require("dotenv").config();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

app.use(helmet()); //sécurise les en-têtes
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/users", userRoutes);

module.exports = app;
