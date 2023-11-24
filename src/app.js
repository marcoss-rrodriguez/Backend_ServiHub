import express from "express";
import config from "./config";
import registrosRoutes from "./routes/registros.routes";

const app = express();

//setting
app.set("port", config.port || 3000);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", registrosRoutes);
app.use("/api/añadir", registrosRoutes);
export default app;
