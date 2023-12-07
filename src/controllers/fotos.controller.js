import ModeloFotos from '../models/fotos.models';

export const mostrarFotos = async (req, res) => {
  try {
    const fotos = await ModeloFotos.findAll();
    res.json(fotos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const añadirFotos = async (req, res) => {
  try {
    const nuevoFoto = await ModeloFotos.create(req.body);
    res.json(nuevoFoto);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};

export const recibirFotosPorId = async (req, res) => {
  try {
    const nuevoFoto = await ModeloFotos.findByPk(req.params.id_foto);
    if (nuevoFoto) {
      res.json(nuevoFoto);
    } else {
      res.status(404).json({ error: 'Foto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const borrarHorario = async (req, res) => {
  try {
    const numFotosEliminados = await ModeloFotos.destroy({
      where: { id_foto: req.params.id_foto }
    });
    if (numFotosEliminados) {
      res.json({ message: 'Foto eliminado con éxito' });
    } else {
      res.status(404).json({ error: 'Foto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarHorario = async (req, res) => {
  try {
    const fotoActualizado = await ModeloFotos.update(req.body, {
      where: { id_foto: req.params.id_foto }
    });
    if (fotoActualizado[0] !== 0) {
      res.json({ message: 'Foto actualizado con éxito' });
    } else {
      res.status(404).json({ error: 'Foto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
