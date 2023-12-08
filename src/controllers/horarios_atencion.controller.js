import ModeloHorario_Atencion from '../models/horarios_atencion.models';

export const mostrarHorario = async (req, res) => {
  try {
    const categoria_horarios = await ModeloHorario_Atencion.findAll();
    res.status(200).json({categoria_horarios});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const añadirHorarios = async (req, res) => {
  try {
    const nuevoHorario = await ModeloHorario_Atencion.create(req.body);
    res.status(201).json({nuevoHorario});
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};

export const recibirHorariosPorId = async (req, res) => {
  try {
    const nuevoHorario = await ModeloHorario_Atencion.findByPk(req.params.id_horario);
    if (nuevoHorario) {
      res.status(200).json({nuevoHorario});
    } else {
      res.status(404).json({ error: 'Horario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const borrarHorario = async (req, res) => {
  try {
    const numHorariosEliminados = await ModeloHorario_Atencion.destroy({
      where: { id_horario: req.params.id_horario }
    });
    if (numHorariosEliminados) {
      res.status(200).json({ message: 'Horario eliminado con éxito' });
    } else {
      res.status(404).json({ error: 'Horario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarHorario = async (req, res) => {
  try {
    const horarioActualizado = await ModeloHorario_Atencion.update(req.body, {
      where: { id_horario: req.params.id_horario }
    });
    if (horarioActualizado[0] !== 0) {
      res.status(200).json({ message: 'Horario actualizado con éxito' });
    } else {
      res.status(404).json({ error: 'Horario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
