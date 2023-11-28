import { Router } from "express";
import {
    mostrarRegistros,
    añadirRegistro,
    recibirRegistroPorId,
    borrarRegistro,
    actualizarRegistro
} from "../controllers/registros.controller";

const routerRegistros= Router();

// Ruta para obtener todos los registros
routerRegistros.get("/registros", mostrarRegistros);

// Ruta para agregar un nuevo registro
routerRegistros.post("/registros", añadirRegistro);

// Ruta para obtener un registro por su ID
routerRegistros.get("/registros/:id_registros", recibirRegistroPorId);

// Ruta para eliminar un registro por su ID
routerRegistros.delete("/registros/:id_registros", borrarRegistro);

// Ruta para actualizar un registro por su ID
routerRegistros.put("/registros/:id_registros", actualizarRegistro);

export default routerRegistros;
