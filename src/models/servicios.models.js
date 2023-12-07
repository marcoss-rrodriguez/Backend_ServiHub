const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const ModeloUsuarios = require("./usuarios.models");
const ModeloFotos = require("./fotos.models");
const ModeloCategorias_Servicios = require("./categoria_servicios.models");

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

      descripcion_servicio: {
        type: DataTypes.STRING, 
        allowNull: false,
      },

      precio: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
  
      id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  
      categoria_servicio: {
        type: DataTypes.STRING,//DUDA
        allowNull: false,
      },

      id_foto_servicio: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'servicios',
      timestamps: false, 
    }
  );

  ModeloServicios.belongsTo(ModeloUsuarios, {
    foreignKey: 'id_vendedor',
    as: 'vendedor'
  });

  ModeloServicios.belongsTo(ModeloFotos, {
    foreignKey: 'id_foto_servicio',
    as: 'fotoServicio'
  });

  ModeloServicios.belongsTo(ModeloCategorias_Servicios, {
    foreignKey: 'categoria_servicio',
    as: 'categoriaServicio'
  });
  
  module.exports = ModeloServicios;