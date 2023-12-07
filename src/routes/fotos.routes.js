import { Router } from "express";
import {
  mostrarfoto,
  añadirfoto,
  recibirfotoPorId,
  borrarfoto,
  actualizarfoto,
} from "../controllers/categorias_servicios.controllers";

const routerfoto = Router();

// Ruta para obtener todos los registros
routerfoto.get("/foto", mostrarfoto);

// Ruta para agregar un nuevo registro
routerfoto.post("/foto", añadirfoto);

// Ruta para obtener un registro por su ID
routerfoto.get("/foto/:id_foto", recibirfotoPorId);

// Ruta para eliminar un registro por su ID
routerfoto.delete("/foto/:id_foto", borrarfoto);

// Ruta para actualizar un registro por su ID
routerfoto.put("/foto/:id_foto", actualizarfoto);

export default routerfoto;
