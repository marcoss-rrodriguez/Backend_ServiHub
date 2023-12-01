import { Router } from "express";
import {
    mostrarSevicios,
    añadirServicios,
    recibirPorServicios,
    borrarServico,
    actualizarServicio
} from "../controllers/servicios.controller";

const routerServicios= Router();

// Ruta para obtener todos los registros
routerRegistros.get("/servicios", mostrarSevicios);

// Ruta para agregar un nuevo registro
routerRegistros.post("/servicios", añadirServicios);

// Ruta para obtener un registro por su ID
routerRegistros.get("/servicios/:id_servicios", recibirPorServicios);

// Ruta para eliminar un registro por su ID
routerRegistros.delete("/servicios/:id_servicios", borrarServico);

// Ruta para actualizar un registro por su ID
routerRegistros.put("/servicios/:id_servicios", actualizarServicio);

export default routerServicios;