
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('servihubdb', 'admin_servihub', 'Servicehub123', {
host: 'servihub.database.windows.net',
    dialect: 'mssql',
    dialectOptions: {
        options: {
          encrypt: true, 
        },
      },
}); 

module.exports = sequelize;
    
