const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const ModeloUsuarios = sequelize.define(
  "ModeloUsuarios",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true, 
    },
    id_rol: {
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

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    telefono: {
      type: DataTypes.INTEGER, ///en duda
      allowNull: false,
    },

    nombre_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    contraseña: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    fecha_nacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    sexo: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
  },
  {
    tableName: 'usuarios',
    timestamps: false, 
  }
);

module.exports = ModeloUsuarios;
