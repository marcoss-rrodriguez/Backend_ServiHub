import { Router } from "express";
import {
    mostrarServicios,
    añadirServicios,
    recibirServiciosPorId,
    borrarServicio,
    actualizarServicio
} from "../controllers/categoria_servicios.controller";

const routerRegistros= Router();

// Ruta para obtener todos los registros
routerServicios.get("/categoria_servicios", mostrarServicios);

// Ruta para agregar un nuevo registro
routerServicios.post("/categoria_servicios", añadirServicios);

// Ruta para obtener un registro por su ID
routerServicios.get("/categoria_servicios/:id_categoria", recibirServiciosPorId);

// Ruta para eliminar un registro por su ID
routerServicios.delete("/categoria_servicios/:id_categoria", borrarServicio);

// Ruta para actualizar un registro por su ID
routerServicios.put("/categoria_servicios/:id_categoria", actualizarServicio);

export default routerServicios;
