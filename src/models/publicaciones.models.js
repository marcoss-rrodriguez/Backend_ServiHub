const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const ModeloUsuarios = require("./usuarios.models");
const ModeloFotos = require("./fotos.models"); // Importar el modelo de usuarios


const ModeloPublicaciones = sequelize.define(
  "ModeloPublicaciones",
  {
    id_publicacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    id_vendedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    descripcion_publicacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    fecha_publicacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    estado_publicacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    id_foto_publicacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "publicaciones",
    timestamps: false,
  }
);

ModeloPublicaciones.belongsTo(ModeloUsuarios, {
  foreignKey: 'id_vendedor',
  as: 'vendedor'
});
ModeloPublicaciones.belongsTo(ModeloFotos, {
  foreignKey: 'id_foto_publicacion',
  as: 'fotoPublicacion'
});

module.exports = ModeloPublicaciones;