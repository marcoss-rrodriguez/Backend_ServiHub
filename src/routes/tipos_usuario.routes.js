import { Router } from "express";
import {
    mostrarTipoUsuarios,
    añadirTipoUsuarios,
    recibirTipoUsuarioPorId,
    borrarTipoUsuario,
    actualizarTipoUsuario
} from "../controllers/tipos_usuario.controllers";

const routerTiposUsuario= Router();

// Ruta para obtener todos los registros
routerTiposUsuario.get("/tipo_usuarios", mostrarTipoUsuarios);

// Ruta para agregar un nuevo registro
routerTiposUsuario.post("/tipo_usuarios/", añadirTipoUsuarios);

// Ruta para obtener un registro por su ID
routerTiposUsuario.get("/tipo_usuarios/:id_tipo_usuario", recibirTipoUsuarioPorId);

// Ruta para eliminar un registro por su ID
routerTiposUsuario.delete("/tipo_usuarios/:id_tipo_usuario", borrarTipoUsuario);

// Ruta para actualizar un registro por su ID
routerTiposUsuario.put("/tipo_usuarios/:id_tipo_usuario", actualizarTipoUsuario);

export default routerTiposUsuario;
