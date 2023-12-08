import { Router } from "express";
import {
  mostrarHorario,
  añadirHorarios,
  recibirHorariosPorId,
  borrarHorario,
  actualizarHorario,
} from "../controllers/horarios_atencion.controller";

const routerhorario = Router();

// Ruta para obtener todos los registros
routerhorario.get("/horario", mostrarHorario);

// Ruta para agregar un nuevo registro
routerhorario.post("/horario", añadirHorarios);

// Ruta para obtener un registro por su ID
routerhorario.get("/horario/:id_horario", recibirHorariosPorId);

// Ruta para eliminar un registro por su ID
routerhorario.delete("/horario/:id_horario", borrarHorario);

// Ruta para actualizar un registro por su ID
routerhorario.put("/horario/:id_horario", actualizarHorario);

export default routerhorario;
