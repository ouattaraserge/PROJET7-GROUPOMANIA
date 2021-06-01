const mysql = require("mysql");
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv").config();
const models = {};

//Connection Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  HOST: "localhost",
  port: 3306,
  dialect: "mysql",
  USER: "root",
  /*DATABASE: "groupomania",
  PASSWORD:"Esinturl0@OuattSerge"*/

  //To create a pool of connections
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
``;
module.export = connection;
