import { Router } from "express";
import {
  mostrarFactura,
  añadirFactura,
  recibirFacturaPorId,
  borrarFactura,
  actualizarFactura,
} from "../controllers/categorias_servicios.controllers";

const routerFactura = Router();

// Ruta para obtener todos los registros
routerFactura.get("/factura", mostrarFactura);

// Ruta para agregar un nuevo registro
routerFactura.post("/factura", añadirFactura);

// Ruta para obtener un registro por su ID
routerFactura.get("/factura/:id_factura", recibirFacturaPorId);

// Ruta para eliminar un registro por su ID
routerFactura.delete("/factura/:id_factura", borrarFactura);

// Ruta para actualizar un registro por su ID
routerFactura.put("/factura/:id_factura", actualizarFactura);

export default routerFactura;
