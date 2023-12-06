const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const ModeloUsuarios = require("./usuarios.models"); // Importar el modelo de usuarios


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
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol_evaluado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "resenas",
    timestamps: false,
  }
);

ModeloResenas.belongsTo(ModeloUsuarios, {
  foreignKey: 'id_evaluador',
  as: 'evaluador'
});
ModeloResenas.belongsTo(ModeloUsuarios, {
  foreignKey: 'id_evaluado',
  as: 'evaluado'
});

module.exports = ModeloResenas;
