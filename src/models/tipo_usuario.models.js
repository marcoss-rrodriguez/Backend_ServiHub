const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const ModeloTpoUsuarios = sequelize.define(
  "ModeloTipoUsuarios",
  {
    id_tipo_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    nombre_tipo_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tipos_usuario",
    timestamps: false,
  }
);

module.exports = ModeloTpoUsuarios;
