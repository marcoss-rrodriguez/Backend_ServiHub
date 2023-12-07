const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const ModeloUsuarios = require("./usuarios.models"); // Importar el modelo de usuarios


const ModeloTransacciones = sequelize.define(
  "ModeloTransacciones",
  {
    id_transaccion: {
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

    fecha_transaccion: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    monto_total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },

    estado_transaccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "transacciones",
    timestamps: false,
  }
);

ModeloTransacciones.belongsTo(ModeloUsuarios, {
  foreignKey: 'id_comprador',
  as: 'comprador'
});
ModeloTransacciones.belongsTo(ModeloUsuarios, {
  foreignKey: 'id_vendedor',
  as: 'vendedor'
});

module.exports = ModeloTransacciones;