import express from "express";
import config from "./config";
import usuariosRoutes from "./routes/usuarios.routes";
import serviciosRoutes from "./routes/servicios.routes";

const app = express();

//setting
app.set("port", config.port || 3000);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", usuariosRoutes);
app.use("/api", serviciosRoutes);


export default app;
