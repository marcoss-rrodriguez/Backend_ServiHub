const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const ModeloUsuarios = sequelize.define(
  "ModeloUsuarios",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true, 
    },
    
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    nombre_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    id_tipo_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    contraseña: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    fecha_nacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    sexo: {
      type: DataTypes.CHAR,
      allowNull: false,
    },

    puntuacion_vendedor:{
      type: DataTypes.DECIMAL,
      allowNull: true,
    },

    puntuacion_comprador:{
      type: DataTypes.DECIMAL,
      allowNull: true,
    },

    descripcion_perfil:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    id_foto_perfil: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    horarios_atencion:{
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'usuarios',
    timestamps: false, 
  }
);

module.exports = ModeloUsuarios;
