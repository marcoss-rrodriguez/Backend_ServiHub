const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const ModeloUsuarios = require("./usuarios.models"); // Importar el modelo de usuarios


const ModeloHorariosAtencion = sequelize.define(
  "ModeloHorariosAtencion",
  {
    id_horario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    dia_semana: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    hora_inicio: {
      type: DataTypes.TIME,
      allowNull: false,
    },

    hora_finalizacion: {
      type: DataTypes.TIME,
      allowNull: false,
    },

    rol_horario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "horarios_atencion",
    timestamps: false,
  }
);

ModeloHorariosAtencion.belongsTo(ModeloUsuarios, {
  foreignKey: 'id_usuario',
  as: 'usuario'
});

module.exports = ModeloHorariosAtencion;