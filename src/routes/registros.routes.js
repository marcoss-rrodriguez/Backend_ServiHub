import { Router } from "express";

import {
    mostrarRegistros,
    añadirRegistro,
    recibirRegistroPorId,
    borrarRegistro,
    actualizarRegistro
} from "../controllers/registros.controller";

const routerRegistros= Router();

routerRegistros.get("/registros", mostrarRegistros);
routerRegistros.post("/registros", añadirRegistro);
routerRegistros.get("/registros/:id_usuarios", recibirRegistroPorId);
routerRegistros.delete("/registros/:id_usuarios", borrarRegistro);
routerRegistros.put("/registros/:id_usuarios", actualizarRegistro);

export default routerRegistros;
