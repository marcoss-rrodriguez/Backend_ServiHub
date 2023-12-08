import { Router } from "express";
import {
    mostrarServicios,
    añadirServicios,
    recibirServiciosPorId,
    borrarServicio,
    actualizarServicio
} from "../controllers/categorias_servicios.controller";

const routerRegistros= Router();

// Ruta para obtener todos los registros
routerRegistros.get("/categoria_servicios", mostrarServicios);

// Ruta para agregar un nuevo registro
routerRegistros.post("/categoria_servicios", añadirServicios);

// Ruta para obtener un registro por su ID
routerRegistros.get("/categoria_servicios/:id_categoria", recibirServiciosPorId);

// Ruta para eliminar un registro por su ID
routerRegistros.delete("/categoria_servicios/:id_categoria", borrarServicio);

// Ruta para actualizar un registro por su ID
routerRegistros.put("/categoria_servicios/:id_categoria", actualizarServicio);

export default routerRegistros;