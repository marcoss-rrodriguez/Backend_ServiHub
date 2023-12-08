import ModeloTipoUsuarios from '../models/tipo_usuario.models';

export const mostrarTipoUsuarios = async (req, res) => {
    try {
      const tiposUsuario = await ModeloTipoUsuarios.findAll();
      res.status(200).json({tiposUsuario});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const añadirTipoUsuarios = async (req, res) => {
    try {
      const nuevoTipoUsuario = await ModeloTipoUsuarios.create(req.body);
      res.status(201).json({nuevoTipoUsuario});
    } catch (error) {
      res.status(500).json({ error: error.message});
    }
  };
  
  export const recibirTipoUsuarioPorId = async (req, res) => {
    try {
      const tiposUsuario = await ModeloTipoUsuarios.findByPk(req.params.id_tipo_usuario);
      if (tiposUsuario) {
        res.status(200).json({tiposUsuario});
      } else {
        res.status(404).json({ error: 'Tipo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const borrarTipoUsuario = async (req, res) => {
    try {
      const numTipoUsuarioEliminados = await ModeloTipoUsuarios.destroy({
        where: { id_tipo_usuario: req.params.id_tipo_usuario }
      });
      if (numTipoUsuarioEliminados) {
        res.status(200).json({ message: 'Tipo eliminado con éxito' });
      } else {
        res.status(404).json({ error: 'Tipo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const actualizarTipoUsuario = async (req, res) => {
    try {
      const registroActualizado = await ModeloTipoUsuarios.update(req.body, {
        where: { id_tipo_usuario: req.params.id_tipo_usuario }
      });
      if (registroActualizado[0] !== 0) {
        res.status(200).json({ message: 'Tipo actualizado con éxito' });
      } else {
        res.status(404).json({ error: 'Tipo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
