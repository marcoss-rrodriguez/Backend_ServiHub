import { Router } from "express";
import {
    mostrarUsuarios,
    añadirUsuarios,
    recibirUsuarioPorId,
    borrarUsuario,
    actualizarUsuario
} from "../controllers/usuarios.controller";

const routerUsuarios= Router();

// Ruta para obtener todos los registros
routerUsuarios.get("/usuarios", mostrarUsuarios);

// Ruta para agregar un nuevo registro
routerUsuarios.post("/usuarios/", añadirUsuarios);

// Ruta para obtener un registro por su ID
routerUsuarios.get("/usuarios/:id_usuario", recibirUsuarioPorId);

// Ruta para eliminar un registro por su ID
routerUsuarios.delete("/usuarios/:id_usuario", borrarUsuario);

// Ruta para actualizar un registro por su ID
routerUsuarios.put("/usuarios/:id_usuario", actualizarUsuario);

export default routerUsuarios;
