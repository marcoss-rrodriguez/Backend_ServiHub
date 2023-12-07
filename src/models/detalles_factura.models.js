const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const ModeloServicios = require("./servicios.models"); // Importar el modelo de usuarios
const ModeloFacturas = require("./facturas.models");

const ModeloDetalles_Factura = sequelize.define(
  "ModeloDetalles_Factura",
  {
    id_detalle_factura: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    id_factura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    id_servicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    tableName: "detalles_factura",
    timestamps: false,
  }
);

ModeloDetallesFactura.belongsTo(ModeloServicios, {
  foreignKey: 'id_servicio',
  as: 'servicio'
});
ModeloDetallesFactura.belongsTo(ModeloFacturas, {
    foreignKey: 'id_factura',
    as: 'factura'
  });

module.exports = ModeloDetalles_Factura;