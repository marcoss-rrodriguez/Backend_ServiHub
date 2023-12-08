import ModeloServicios from "../models/servicios.models";

export const mostrarSevicios = async (req, res) => {
  try {
    const servicios = await ModeloServicios.findAll();
    res.status(201).json({servicios});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const añadirServicios = async (req, res) => {
  try {
    const nuevoServico = await ModeloServicios.create(req.body);
    res.status(201).json({nuevoServico});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const recibirPorServicios = async (req, res) => {
  try {
    const servicio = await ModeloServicios.findOne({
      where: { categoria_servicio: req.params.categoria_servicio },
    });
    if (servicio) {
      res.status(200).json({servicio});
    } else {
      res.status(404).json({ error: "Servicio no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const borrarServico = async (req, res) => {
  try {
    const numServicosEliminados = await ModeloServicios.destroy({
      where: { id_servicio: req.params.id_servicio },
    });
    if (numServicosEliminados) {
      res.status(200).json({ message: "Servicio eliminado con éxito" });
    } else {
      res.status(404).json({ error: "Servicio no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarServicio = async (req, res) => {
  try {
    const servicioActualizado = await ModeloServicios.update(req.body, {
      where: { id_servicio: req.params.id_servicio },
    });
    if (servicioActualizado[0] !== 0) {
      res.status(200).json({ message: "Servicio actualizado con éxito" });
    } else {
      res.status(404).json({ error: "Servicio no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
