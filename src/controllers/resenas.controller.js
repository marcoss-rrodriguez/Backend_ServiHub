import ModeloResenas from '../models/resenas.models';

export const mostrarResenas = async (req, res) => {
  try {
    const resenas = await ModeloResenas.findAll();
    res.json(resenas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const añadirResena = async (req, res) => {
  try {
    const nuevoResenas = await ModeloResenas.create(req.body);
    res.json(nuevoResenas);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};

export const recibirResenasPorId = async (req, res) => {
  try {
    const resenas = await ModeloResenas.findByPk(req.params.id_resena);
    if (resenas) {
      res.json(resenas);
    } else {
      res.status(404).json({ error: 'Reseña no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const borrarResenas = async (req, res) => {
  try {
    const numResenasEliminados = await ModeloResenas.destroy({
      where: { id_resena: req.params.id_resena }
    });
    if (numResenasEliminados) {
      res.json({ message: 'Reseña eliminado con éxito' });
    } else {
      res.status(404).json({ error: 'Reseña no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarResena = async (req, res) => {
  try {
    const resenaActualizado = await ModeloResenas.update(req.body, {
      where: { id_resena: req.params.id_resena }
    });
    if (resenaActualizado[0] !== 0) {
      res.json({ message: 'Reseña actualizado con éxito' });
    } else {
      res.status(404).json({ error: 'Reseña no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
