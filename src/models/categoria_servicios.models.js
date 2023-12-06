const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const ModeloCategorias_Servicios = sequelize.define(
  "ModeloCategorias_Servicios",
  {
    id_categoria: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true, 
    },
    nombre_categotia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'categorias_servicios',
    timestamps: false, 
  }
);

module.exports = ModeloCategorias_Servicios;
