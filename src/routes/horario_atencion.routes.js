import { Router } from "express";
import {
  mostrarhorario,
  añadirhorario,
  recibirhorarioPorId,
  borrarhorario,
  actualizarhorario,
} from "../controllers/categorias_servicios.controllers";

const routerhorario = Router();

// Ruta para obtener todos los registros
routerhorario.get("/horario", mostrarhorario);

// Ruta para agregar un nuevo registro
routerhorario.post("/horario", añadirhorario);

// Ruta para obtener un registro por su ID
routerhorario.get("/horario/:id_horario", recibirhorarioPorId);

// Ruta para eliminar un registro por su ID
routerhorario.delete("/horario/:id_horario", borrarhorario);

// Ruta para actualizar un registro por su ID
routerhorario.put("/horario/:id_horario", actualizarhorario);

export default routerhorario;
