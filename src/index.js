import app from "./app";
import sequelize from './sequelize';

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa con la base de datos.');
    await sequelize.sync(); // Sincroniza todos los modelos con la base de datos
    app.listen(app.get("port"));
    console.log("server on port", app.get("port"));
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

startServer();
