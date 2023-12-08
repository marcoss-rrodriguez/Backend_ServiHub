import { Router } from "express";
import {
  mostrarPublicaciones,
  añadirPublicaciones,
  recibirPublicacionesPorId,
  borrarPublicacion,
  actualizarPublicacion,
} from "../controllers/publicaciones.controller";

const routerpublicacion = Router();

// Ruta para obtener todos los registros
routerpublicacion.get("/publicacion", mostrarPublicaciones);

// Ruta para agregar un nuevo registro
routerpublicacion.post("/publicacion", añadirPublicaciones);

// Ruta para obtener un registro por su ID
routerpublicacion.get("/publicacion/:id_publicacion", recibirPublicacionesPorId);

// Ruta para eliminar un registro por su ID
routerpublicacion.delete("/publicacion/:id_publicacion", borrarPublicacion);

// Ruta para actualizar un registro por su ID
routerpublicacion.put("/publicacion/:id_publicacion", actualizarPublicacion);

export default routerpublicacion;
