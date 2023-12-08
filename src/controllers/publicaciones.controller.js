import ModeloPublicaciones from '../models/publicaciones.models';

export const mostrarPublicaciones = async (req, res) => {
  try {
    const publicaciones = await ModeloPublicaciones.findAll();
    res.status(200).json({publicaciones});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const añadirPublicaciones = async (req, res) => {
  try {
    const nuevaPublicacion = await ModeloPublicaciones.create(req.body);
    res.status(201).json({nuevaPublicacion});
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};

export const recibirPublicacionesPorId = async (req, res) => {
  try {
    const nuevaPublicacion = await ModeloPublicaciones.findByPk(req.params.id_publicacion);
    if (nuevaPublicacion) {
      res.status(200).json({nuevaPublicacion});
    } else {
      res.status(404).json({ error: 'Publicacion no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const borrarPublicacion = async (req, res) => {
  try {
    const numPublicacionesEliminados = await ModeloPublicaciones.destroy({
      where: { id_publicacion: req.params.id_publicacion }
    });
    if (numPublicacionesEliminados) {
      res.status(200).json({ message: 'Publicacion eliminado con éxito' });
    } else {
      res.status(404).json({ error: 'Publicacion no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarPublicacion = async (req, res) => {
  try {
    const PublicacionActualizado = await ModeloPublicaciones.update(req.body, {
      where: { id_publicacion: req.params.id_publicacion }
    });
    if (PublicacionActualizado[0] !== 0) {
      res.status(200).json({ message: 'Publicacion actualizado con éxito' });
    } else {
      res.status(404).json({ error: 'Publicacion no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
