import { Router } from "express";
import {
  mostrarpublicacion,
  añadirpublicacion,
  recibirpublicacionPorId,
  borrarpublicacion,
  actualizarpublicacion,
} from "../controllers/categorias_servicios.controllers";

const routerpublicacion = Router();

// Ruta para obtener todos los registros
routerpublicacion.get("/publicacion", mostrarpublicacion);

// Ruta para agregar un nuevo registro
routerpublicacion.post("/publicacion", añadirpublicacion);

// Ruta para obtener un registro por su ID
routerpublicacion.get("/publicacion/:id_publicacion", recibirpublicacionPorId);

// Ruta para eliminar un registro por su ID
routerpublicacion.delete("/publicacion/:id_publicacion", borrarpublicacion);

// Ruta para actualizar un registro por su ID
routerpublicacion.put("/publicacion/:id_publicacion", actualizarpublicacion);

export default routerpublicacion;
