import { Router } from "express";
import {
  mostrarFotos,
  añadirFotos,
  recibirFotosPorId,
  borrarHorario,
  actualizarHorario,
} from "../controllers/fotos.controller";

const routerfoto = Router();

// Ruta para obtener todos los registros
routerfoto.get("/foto", mostrarFotos);

// Ruta para agregar un nuevo registro
routerfoto.post("/foto", añadirFotos);

// Ruta para obtener un registro por su ID
routerfoto.get("/foto/:id_foto", recibirFotosPorId);

// Ruta para eliminar un registro por su ID
routerfoto.delete("/foto/:id_foto", borrarHorario);

// Ruta para actualizar un registro por su ID
routerfoto.put("/foto/:id_foto", actualizarHorario);

export default routerfoto;
