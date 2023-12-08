import ModeloContrataciones_Fotos from '../models/contrataciones_fotos.models';

export const mostrarContrataciones = async (req, res) => {
  try {
    const contrataciones_fotos = await ModeloContrataciones_Fotos.findAll();
    res.status(200).json({contrataciones_fotos});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const añadirContrataciones = async (req, res) => {
  try {
    const nuevaContratacion = await ModeloContrataciones_Fotos.create(req.body);
    res.status(200).json({nuevaContratacion});
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};

export const recibirContratacionesPorId = async (req, res) => {
  try {
    const nuevaContratacion = await ModeloContrataciones_Fotos.findByPk(req.params.id_contratacion_foto);
    if (nuevaContratacion) {
      res.status(200).json({nuevaContratacion});
    } else {
      res.status(404).json({ error: 'Contratacion no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const borrarContratacion = async (req, res) => {
  try {
    const numContratacionEliminados = await ModeloContrataciones_Fotos.destroy({
      where: { id_contratacion_foto: req.params.id_contratacion_foto }
    });
    if (numContratacionEliminados) {
      res.status(200).json({ message: 'Contratacion eliminado con éxito' });
    } else {
      res.status(404).json({ error: 'Contratacion no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarContratacion = async (req, res) => {
  try {
    const ContratacionActualizado = await ModeloContrataciones_Fotos.update(req.body, {
      where: { id_contratacion_foto: req.params.id_contratacion_foto }
    });
    if (ContratacionActualizado[0] !== 0) {
      res.status(200).json({ message: 'Contratacion actualizado con éxito' });
    } else {
      res.status(404).json({ error: 'Contratacion no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
