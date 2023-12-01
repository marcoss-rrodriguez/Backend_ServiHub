const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const ModeloRegistros = sequelize.define(
    "ModeloServicio",
    {
      id_servicios: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, 
      },
      id_usuarios: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  
      categorias: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      precio_trabajo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      ubicacion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      descripcion: {
        type: DataTypes.STRING, 
        allowNull: false,
      },
  
      fecha_inicio: {
        type: DataTypes.INTEGER,//DUDA
        allowNull: false,
      },
  
      fecha_finalizacion: {
        type: DataTypes.INTEGER,//DUDA
        allowNull: false,
      },
  
      imagen: {
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