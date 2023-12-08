import express from "express";
import config from "./config";
import categoriasServiciosRoutes from "./routes/categorias_servicios.routes";
import contratacionesFotoRoutes from "./routes/contrataciones_foto.routes";
import detallesFacturaRoutes from "./routes/detalles_factura.routes";
import facturaRoutes from "./routes/facturas.routes";
import fotosRoutes from "./routes/fotos.routes";
import horarioAtencionRoutes from "./routes/horario_atencion.routes";
import publicacionesRoutes from "./routes/publicaciones.routes";
import resenasRoutes from "./routes/resenas.routes";
import serviciosRoutes from "./routes/servicios.routes";
import tiposUsuarioRoutes from "./routes/tipos_usuario.routes";
import transaccionesRoutes from "./routes/transacciones.routes";
import usuariosRoutes from "./routes/usuarios.routes";

const app = express();

//setting
app.set("port", config.port || 3000);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", categoriasServiciosRoutes);
app.use("/api", contratacionesFotoRoutes);
app.use("/api", detallesFacturaRoutes);
app.use("/api", facturaRoutes);
app.use("/api", fotosRoutes);
app.use("/api", horarioAtencionRoutes);
app.use("/api", publicacionesRoutes);
app.use("/api", resenasRoutes);
app.use("/api", serviciosRoutes);
app.use("/api", tiposUsuarioRoutes);
app.use("/api", transaccionesRoutes);
app.use("/api", usuariosRoutes);

export default app;
