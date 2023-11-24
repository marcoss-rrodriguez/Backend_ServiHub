const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const ModeloRegistros = sequelize.define("ModeloRegistro", {
  id_tipo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  correo_electronico: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  numero_celular: {
    type: DataTypes.INTEGER, ///en duda
    allowNull: false,
  },

  usuarios: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  fecha_nacimiento: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  sexo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = ModeloRegistros;
