import { config } from 'dotenv';
config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_SERVER,
  dialect: 'mssql', // Elige el dialecto correspondiente a tu base de datos (MySQL, PostgreSQL, etc.)
  dialectOptions: {
    options: {
      encrypt: true, // Si es necesario, dependiendo de la configuración de tu servidor
    },
  },
});

module.exports = sequelize;
