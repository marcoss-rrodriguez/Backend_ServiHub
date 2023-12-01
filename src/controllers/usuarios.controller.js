import ModeloUusarios from '../models/usuarios.models';

export const mostrarUsuarios = async (req, res) => {
  try {
    const usuarios = await ModeloUusarios.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const añadirUsuarios = async (req, res) => {
  try {
    const nuevoUsuario = await ModeloUusarios.create(req.body);
    res.json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};

export const recibirUsuarioPorId = async (req, res) => {
  try {
    const usuario = await ModeloUusarios.findByPk(req.params.id_usuario);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const borrarUsuario = async (req, res) => {
  try {
    const numUsuarioEliminados = await ModeloUusarios.destroy({
      where: { id_usuario: req.params.id_usuario }
    });
    if (numUsuarioEliminados) {
      res.json({ message: 'Usuario eliminado con éxito' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarUsuario = async (req, res) => {
  try {
    const registroActualizado = await ModeloUusarios.update(req.body, {
      where: { id_usuario: req.params.id_usuario }
    });
    if (registroActualizado[0] !== 0) {
      res.json({ message: 'Usuario actualizado con éxito' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
