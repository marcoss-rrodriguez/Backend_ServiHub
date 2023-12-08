import ModeloFacturas from '../models/facturas.models';

export const mostrarfacturas = async (req, res) => {
  try {
    const facturas = await ModeloFacturas.findAll();
    res.status(200).json({facturas});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const añadirFacturas = async (req, res) => {
  try {
    const nuevoFacturas = await ModeloFacturas.create(req.body);
    res.status(201).json({nuevoFacturas});
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};

export const recibirFacturasPorId = async (req, res) => {
  try {
    const nuevoFacturas = await ModeloFacturas.findByPk(req.params.id_factura);
    if (nuevoFacturas) {
      res.status(200).json({nuevoFacturas});
    } else {
      res.status(404).json({ error: 'Factura no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const borrarFactura = async (req, res) => {
  try {
    const numFacturasEliminados = await ModeloFacturas.destroy({
      where: { id_factura: req.params.id_factura }
    });
    if (numFacturasEliminados) {
      res.status(200).json({ message: 'Factura eliminado con éxito' });
    } else {
      res.status(404).json({ error: 'Factura no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarFactura = async (req, res) => {
  try {
    const FacturaActualizado = await ModeloFacturas.update(req.body, {
      where: { id_factura: req.params.id_factura }
    });
    if (FacturaActualizado[0] !== 0) {
      res.status(200).json({ message: 'Factura actualizado con éxito' });
    } else {
      res.status(404).json({ error: 'Factura no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
