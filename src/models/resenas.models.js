const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const ModeloResenas = sequelize.define(
  "ModeloResena",
  {
    id_resena: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true, 
    },
    id_evaluador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    id_evaluado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    puntuacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    comentario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    fecha_resena: {
      type: DataTypes.DATE, ///en duda
      allowNull: false,
    },
  },
  {
    tableName: 'resenas',
    timestamps: false, 
  }
);

module.exports = ModeloResenas;
