import { Router } from "express";
import {
  mostrarfacturas,
  añadirFacturas,
  recibirFacturasPorId,
  borrarFactura,
  actualizarFactura,
} from "../controllers/factura.controller";

const routerFactura = Router();

// Ruta para obtener todos los registros
routerFactura.get("/factura", mostrarfacturas);

// Ruta para agregar un nuevo registro
routerFactura.post("/factura", añadirFacturas);

// Ruta para obtener un registro por su ID
routerFactura.get("/factura/:id_factura", recibirFacturasPorId);

// Ruta para eliminar un registro por su ID
routerFactura.delete("/factura/:id_factura", borrarFactura);

// Ruta para actualizar un registro por su ID
routerFactura.put("/factura/:id_factura", actualizarFactura);

export default routerFactura;
