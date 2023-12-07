import { Router } from "express";
import {
  mostrarDetallesFactura,
  añadirDetallesFactura,
  recibirDetallesFacturaPorId,
  borrarDetallesFactura,
  actualizarDetallesFactura,
} from "../controllers/categorias_servicios.controllers";

const routerDetallesFactura = Router();

// Ruta para obtener todos los registros
routerDetallesFactura.get("/detales_factura", mostrarDetallesFactura);

// Ruta para agregar un nuevo registro
routerDetallesFactura.post("/detales_factura", añadirDetallesFactura);

// Ruta para obtener un registro por su ID
routerDetallesFactura.get(
  "/detales_factura/:id_detalle_factura",
  recibirDetallesFacturaPorId
);

// Ruta para eliminar un registro por su ID
routerDetallesFactura.delete(
  "/detales_factura/:id_detalle_factura",
  borrarDetallesFactura
);

// Ruta para actualizar un registro por su ID
routerDetallesFactura.put(
  "/detales_factura/:id_detalle_factura",
  actualizarDetallesFactura
);

export default routerDetallesFactura;
