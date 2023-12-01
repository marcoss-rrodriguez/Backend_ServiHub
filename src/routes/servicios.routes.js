import { Router } from "express";
import {
    mostrarSevicios,
    añadirServicios,
    recibirPorServicios,
    borrarServico,
    actualizarServicio
} from "../controllers/servicios.controller";

const routerServicios= Router();

// Ruta para obtener todos los registros
routerServicios.get("/servicios", (req, res) => {
    mostrarSevicios(req, res)
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: err.toString() });
      });
  });
  

// Ruta para agregar un nuevo registro
routerServicios.post("/servicios", añadirServicios);

// Ruta para obtener un registro por su ID
routerServicios.get("/servicios/:categoria_servicio", (req, res) => {
    recibirPorServicios(req, res)
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: err.toString() });
      });
  });
  
// Ruta para eliminar un registro por su ID
routerServicios.delete("/servicios/:id_servicio", borrarServico);

// Ruta para actualizar un registro por su ID
routerServicios.put("/servicios/:id_servicio", actualizarServicio);

export default routerServicios;