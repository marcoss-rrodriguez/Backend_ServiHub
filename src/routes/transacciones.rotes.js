import { Router } from "express";
import {
  mostrartransaccion,
  añadirtransaccion,
  recibirtransaccionPorId,
  borrartransaccion,
  actualizartransaccion,
} from "../controllers/categorias_servicios.controllers";

const routertransaccion = Router();

// Ruta para obtener todos los registros
routertransaccion.get("/transaccion", mostrartransaccion);

// Ruta para agregar un nuevo registro
routertransaccion.post("/transaccion", añadirtransaccion);

// Ruta para obtener un registro por su ID
routertransaccion.get("/transaccion/:id_transaccion", recibirtransaccionPorId);

// Ruta para eliminar un registro por su ID
routertransaccion.delete("/transaccion/:id_transaccion", borrartransaccion);

// Ruta para actualizar un registro por su ID
routertransaccion.put("/transaccion/:id_transaccion", actualizartransaccion);

export default routertransaccion;
