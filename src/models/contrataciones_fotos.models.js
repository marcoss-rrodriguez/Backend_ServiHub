const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const ModeloUsuarios = require("./usuarios.models"); // Importar el modelo de usuarios


const ModeloContrataciones_Fotos = sequelize.define(
  "ModeloContrataciones_Fotos",
  {
    id_contrataciones_foto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    id_comprador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    id_comprador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    fecha_contratacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    detalles_adicionales: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "contrataciones_fotos",
    timestamps: false,
  }
);

ModeloContratacionesFotos.belongsTo(ModeloUsuarios, {
  foreignKey: 'id_comprador',
  as: 'comprador'
});
ModeloContratacionesFotos.belongsTo(ModeloUsuarios, {
  foreignKey: 'id_vendedor',
  as: 'vendedor'
});

module.exports = ModeloContrataciones_Fotos;