const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const ModeloUsuarios = require("./usuarios.models"); // Importar el modelo de usuarios


const ModeloFacturas = sequelize.define(
  "ModeloFacturas",
  {
    id_factura: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    id_comprador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    id_vendedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    fecha_emision: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    monto_total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    tableName: "facturas",
    timestamps: false,
  }
);

ModeloFacturas.belongsTo(ModeloUsuarios, {
  foreignKey: 'id_comprador',
  as: 'comprador'
});
ModeloFacturas.belongsTo(ModeloUsuarios, {
  foreignKey: 'id_vendedor',
  as: 'vendedor'
});

module.exports = ModeloFacturas;