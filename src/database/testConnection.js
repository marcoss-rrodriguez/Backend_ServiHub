// testConnection.js

const sequelize = require('../sequelize'); // Importa la instancia de Sequelize

async function testConnection() {
  try {
    await sequelize.authenticate(); // Intenta autenticarse con la base de datos

    console.log('Conexión exitosa con la base de datos.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  } finally {
    sequelize.close(); // Cierra la conexión después de la prueba (opcional)
  }
}

testConnection(); // Ejecuta la función de prueba al correr el script
