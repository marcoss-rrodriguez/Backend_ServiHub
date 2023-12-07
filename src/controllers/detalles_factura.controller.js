import ModeloDetalles_Factura from '../models/detalles_factura.models';

export const mostrarDetalles_Factura = async (req, res) => {
  try {
    const fotos = await ModeloDetalles_Factura.findAll();
    res.json(fotos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const añadirDetalles_Factura = async (req, res) => {
  try {
    const nuevoDetalles_Factura = await ModeloDetalles_Factura.create(req.body);
    res.json(nuevoDetalles_Factura);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};

export const recibirDetalles_FacturaPorId = async (req, res) => {
  try {
    const nuevoDetalles_Factura = await ModeloDetalles_Factura.findByPk(req.params.id_detalles_factura);
    if (nuevoDetalles_Factura) {
      res.json(nuevoDetalles_Factura);
    } else {
      res.status(404).json({ error: 'Factura no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const borrarDetalles_Factura = async (req, res) => {
  try {
    const numDetalles_FacturaEliminados = await ModeloDetalles_Factura.destroy({
      where: { id_detalles_factura: req.params.id_detalles_factura }
    });
    if (numDetalles_FacturaEliminados) {
      res.json({ message: 'Factura eliminado con éxito' });
    } else {
      res.status(404).json({ error: 'Factura no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarDetalles_Factura = async (req, res) => {
  try {
    const Detalles_FacturaActualizado = await ModeloDetalles_Factura.update(req.body, {
      where: { id_detalles_factura: req.params.id_detalles_factura }
    });
    if (Detalles_FacturaActualizado[0] !== 0) {
      res.json({ message: 'Factura actualizado con éxito' });
    } else {
      res.status(404).json({ error: 'Factura no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
