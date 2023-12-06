import express from "express";
import config from "./config";
import usuariosRoutes from "./routes/usuarios.routes";
import serviciosRoutes from "./routes/servicios.routes";
import categoriasRoutes from "./routes/categorias_servicios.routes";
import resenasRoutes from "./routes/resenas.routes";
import tiposUsuariosRoutes from "./routes/tipos_usuario.routes"

const app = express();

//setting
app.set("port", config.port || 3000);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", usuariosRoutes);
app.use("/api", serviciosRoutes);
app.use("/api", categoriasRoutes);
app.use("/api", resenasRoutes);
app.use("/api",tiposUsuariosRoutes);

export default app;
