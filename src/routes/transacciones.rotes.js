import { Router } from "express";
import {
  mostrarTransacciones,
  añadirTransacciones,
  recibirTransaccionesPorId,
  borrarTransaccion,
  actualizarTransaccion,
} from "../controllers/transacciones.controller";

const routertransaccion = Router();

// Ruta para obtener todos los registros
routertransaccion.get("/transaccion", mostrarTransacciones);

// Ruta para agregar un nuevo registro
routertransaccion.post("/transaccion", añadirTransacciones);

// Ruta para obtener un registro por su ID
routertransaccion.get("/transaccion/:id_transaccion", recibirTransaccionesPorId);

// Ruta para eliminar un registro por su ID
routertransaccion.delete("/transaccion/:id_transaccion", borrarTransaccion);

// Ruta para actualizar un registro por su ID
routertransaccion.put("/transaccion/:id_transaccion", actualizarTransaccion);

export default routertransaccion;
