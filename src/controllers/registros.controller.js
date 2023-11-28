import ModeloRegistros from '../models/registros.models';

export const mostrarRegistros = async (req, res) => {
  try {
    const registros = await ModeloRegistros.findAll();
    res.json(registros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const añadirRegistro = async (req, res) => {
  try {
    const nuevoRegistro = await ModeloRegistros.create(req.body);
    res.json(nuevoRegistro);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};

export const recibirRegistroPorId = async (req, res) => {
  try {
    const registro = await ModeloRegistros.findByPk(req.params.id_registros);
    if (registro) {
      res.json(registro);
    } else {
      res.status(404).json({ error: 'Registro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const borrarRegistro = async (req, res) => {
  try {
    const numRegistrosEliminados = await ModeloRegistros.destroy({
      where: { id_registros: req.params.id_registros }
    });
    if (numRegistrosEliminados) {
      res.json({ message: 'Registro eliminado con éxito' });
    } else {
      res.status(404).json({ error: 'Registro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarRegistro = async (req, res) => {
  try {
    const registroActualizado = await ModeloRegistros.update(req.body, {
      where: { id_registros: req.params.id_registros }
    });
    if (registroActualizado[0] !== 0) {
      res.json({ message: 'Registro actualizado con éxito' });
    } else {
      res.status(404).json({ error: 'Registro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
