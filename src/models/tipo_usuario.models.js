const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

//Modifique el nombre del modelo antes estaba Tpo_Usuarios, y lo cambie a Tipo_Usuarios
const ModeloTipo_Usuarios = sequelize.define(
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

module.exports = ModeloTipo_Usuarios;
