import { Router } from "express";
import {
    mostrarResenas,
    añadirResena,
    recibirResenasPorId,
    borrarResenas,
    actualizarResena
} from "../controllers/resenas.controllers";

const routerResenas= Router();

// Ruta para obtener todos los registros
routerResenas.get("/resenas", mostrarResenas);

// Ruta para agregar un nuevo registro
routerResenas.post("/resenas", añadirResena);

// Ruta para obtener un registro por su ID
routerResenas.get("/resenas/:id_resena", recibirResenasPorId);

// Ruta para eliminar un registro por su ID
routerResenas.delete("/resenas/:id_resena", borrarResenas);

// Ruta para actualizar un registro por su ID
routerResenas.put("/resenas/:id_resena", actualizarResena);

export default routerResenas;