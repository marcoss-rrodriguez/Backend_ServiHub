const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const ModeloServicios = sequelize.define(
    "ModeloServicios",
    {
      id_servicio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, 
      },
      id_vendedor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      nombre_servicio:{
        type: DataTypes.STRING, 
        allowNull: false,
      },

      descripcion_servicio: {
        type: DataTypes.STRING, 
        allowNull: false,
      },

      precio: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
  
      categoria_servicio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      imagen_servicio: {
        type: DataTypes.STRING,//DUDA
        allowNull: false,
      },
    },
    {
      tableName: 'servicios',
      timestamps: false, 
    }
  );
  
  module.exports = ModeloServicios;