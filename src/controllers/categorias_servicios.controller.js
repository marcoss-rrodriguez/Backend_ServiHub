import ModeloCategorias_Servicios from '../models/categoria_servicios.models';

export const mostrarServicios = async (req, res) => {
  try {
    const categoria_servicios = await ModeloCategorias_Servicios.findAll();
    res.status(200).json({categoria_servicios});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const añadirServicios = async (req, res) => {
  try {
    const nuevoServicios = await ModeloCategorias_Servicios.create(req.body);
    res.status(201).json({nuevoServicios});
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};

export const recibirServiciosPorId = async (req, res) => {
  try {
    const nuevoServicios = await ModeloCategorias_Servicios.findByPk(req.params.id_categoria);
    if (nuevoServicios) {
      res.status(200).json({nuevoServicios});
    } else {
      res.status(404).json({ error: 'Servicio no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const borrarServicio = async (req, res) => {
  try {
    const numServiciosEliminados = await ModeloCategorias_Servicios.destroy({
      where: { id_categoria: req.params.id_categoria }
    });
    if (numServiciosEliminados) {
      res.status(200).json({ message: 'Servicio eliminado con éxito' });
    } else {
      res.status(404).json({ error: 'Servicio no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarServicio = async (req, res) => {
  try {
    const servicioActualizado = await ModeloCategorias_Servicios.update(req.body, {
      where: { id_categoria: req.params.id_categoria }
    });
    if (servicioActualizado[0] !== 0) {
      res.status(200).json({ message: 'Servicio actualizado con éxito' });
    } else {
      res.status(404).json({ error: 'Servicio no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
