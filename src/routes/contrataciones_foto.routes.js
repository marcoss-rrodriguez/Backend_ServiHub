import { Router } from "express";
import {
  mostrarContratacionesFotos,
  añadirContratacionesFotos,
  recibirContratacionesFotosPorId,
  borrarContratacionesFotos,
  actualizarContratacionesFotos,
} from "../controllers/categorias_servicios.controllers";

const routerContratacionesFotos = Router();

// Ruta para obtener todos los registros
routerContratacionesFotos.get("/contrataciones_fotos", mostrarContratacionesFotos);

// Ruta para agregar un nuevo registro
routerContratacionesFotos.post("/contrataciones_fotos", añadirContratacionesFotos);

// Ruta para obtener un registro por su ID
routerContratacionesFotos.get(
  "/contrataciones_fotos/:id_contratacion_foto",
  recibirContratacionesFotosPorId
);

// Ruta para eliminar un registro por su ID
routerContratacionesFotos.delete(
  "/contrataciones_fotos/:id_contratacion_foto",
  borrarContratacionesFotos
);

// Ruta para actualizar un registro por su ID
routerContratacionesFotos.put(
  "/contrataciones_fotos/:id_contratacion_foto",
  actualizarContratacionesFotos
);

export default routerContratacionesFotos;
