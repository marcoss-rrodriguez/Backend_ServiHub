import { Router } from "express";
import {
  mostrarContrataciones,
  añadirContrataciones,
  recibirContratacionesPorId,
  borrarContratacion,
  actualizarContratacion,
} from "../controllers/contrataciones_fotos.controller";

const routerContratacionesFotos = Router();

// Ruta para obtener todos los registros
routerContratacionesFotos.get("/contrataciones_fotos", mostrarContrataciones);

// Ruta para agregar un nuevo registro
routerContratacionesFotos.post("/contrataciones_fotos", añadirContrataciones);

// Ruta para obtener un registro por su ID
routerContratacionesFotos.get(
  "/contrataciones_fotos/:id_contratacion_foto",
  recibirContratacionesPorId
);

// Ruta para eliminar un registro por su ID
routerContratacionesFotos.delete(
  "/contrataciones_fotos/:id_contratacion_foto",
  borrarContratacion
);

// Ruta para actualizar un registro por su ID
routerContratacionesFotos.put(
  "/contrataciones_fotos/:id_contratacion_foto",
  actualizarContratacion
);

export default routerContratacionesFotos;
