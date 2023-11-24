
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('servihubdb', 'admin_servihub', 'Servicehub123', {
host: 'servihub.database.windows.net',
    dialect: 'mssql',
    dialectOptions: {
        options: {
          encrypt: true, // Si estás usando Azure u otras configuraciones de seguridad
        },
      },
}); 

module.exports = sequelize;
    
