import { Router } from "express";
import {
  mostrarDetalles_Factura,
  añadirDetalles_Factura,
  recibirDetalles_FacturaPorId,
  borrarDetalles_Factura,
  actualizarDetalles_Factura,
} from "../controllers/detalles_factura.controller";

const routerDetallesFactura = Router();

// Ruta para obtener todos los registros
routerDetallesFactura.get("/detales_factura", mostrarDetalles_Factura);

// Ruta para agregar un nuevo registro
routerDetallesFactura.post("/detales_factura", añadirDetalles_Factura);

// Ruta para obtener un registro por su ID
routerDetallesFactura.get(
  "/detales_factura/:id_detalle_factura",
  recibirDetalles_FacturaPorId
);

// Ruta para eliminar un registro por su ID
routerDetallesFactura.delete(
  "/detales_factura/:id_detalle_factura",
  borrarDetalles_Factura
);

// Ruta para actualizar un registro por su ID
routerDetallesFactura.put(
  "/detales_factura/:id_detalle_factura",
  actualizarDetalles_Factura
);

export default routerDetallesFactura;
