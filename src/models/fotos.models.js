const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const ModeloFotos = sequelize.define(
  "ModeloFotos",
  {
    id_foto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    id_referencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    tipo_referencia: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    ubicacion_foto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "fotos",
    timestamps: false,
  }
);


module.exports = ModeloFotos;