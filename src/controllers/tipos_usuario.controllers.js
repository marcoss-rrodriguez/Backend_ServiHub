import ModeloTipoUsuarios from '../models/tipos_usuario.models';

export const mostrarTipoUsuarios = async (req, res) => {
    try {
      const tiposUsuario = await ModeloTipoUsuarios.findAll();
      res.json({tiposUsuario});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const añadirTipoUsuarios = async (req, res) => {
    try {
      const nuevoTipoUsuario = await ModeloTipoUsuarios.create(req.body);
      res.json({nuevoTipoUsuario});
    } catch (error) {
      res.status(500).json({ error: error.message});
    }
  };
  
  export const recibirTipoUsuarioPorId = async (req, res) => {
    try {
      const tiposUsuario = await ModeloTipoUsuarios.findByPk(req.params.id_tipo_usuario);
      if (tiposUsuario) {
        res.json({tiposUsuario});
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
        res.json({ message: 'Tipo eliminado con éxito' });
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
        res.json({ message: 'Tipo actualizado con éxito' });
      } else {
        res.status(404).json({ error: 'Tipo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
