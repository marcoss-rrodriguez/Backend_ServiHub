import ModeloUusarios from "../models/usuarios.models";
const verificarRegistro = require("../middlewares/autentificacionRegistros.js");

// Obtener todos los usuarios
export const mostrarUsuarios = async (req, res) => {
  try {
    const usuarios = await ModeloUusarios.findAll();
    res.status(200).json(usuarios); // OK
  } catch (error) {
    res.status(500).json({ error: error.message }); // Internal Server Error
  }
};

// Añadir un nuevo usuario
export const añadirUsuarios = async (req, res) => {
  try {
    const usuario = req.body;
    const usuarioEncontrado = await verificarRegistro.verificarRegistro(usuario);

    if (usuarioEncontrado != null) {
      return res.status(409).json({ message: "Nombre de usuario existente, intente con otro nombre" }); // Conflict
    }

    const nuevoUsuario = await ModeloUusarios.create(req.body);
    return res.status(201).json({ nuevoUsuario }); // Created

  } catch (error) {
    return res.status(500).json({ error: error.message }); // Internal Server Error
  }
};

// Recibir un usuario por su ID
export const recibirUsuarioPorId = async (req, res) => {
  try {
    const usuario = await ModeloUusarios.findByPk(req.params.id_usuario);
    if (usuario) {
      res.status(200).json(usuario); // OK
    } else {
      res.status(404).json({ error: "Usuario no encontrado" }); // Not Found
    }
  } catch (error) {
    res.status(500).json({ error: error.message }); // Internal Server Error
  }
};

// Borrar un usuario
export const borrarUsuario = async (req, res) => {
  try {
    const numUsuarioEliminados = await ModeloUusarios.destroy({
      where: { id_usuario: req.params.id_usuario },
    });
    if (numUsuarioEliminados) {
      res.status(200).json({ message: "Usuario eliminado con éxito" }); // OK
    } else {
      res.status(404).json({ error: "Usuario no encontrado" }); // Not Found
    }
  } catch (error) {
    res.status(500).json({ error: error.message }); // Internal Server Error
  }
};

// Actualizar un usuario
export const actualizarUsuario = async (req, res) => {
  try {
    const usuario = req.body;
    const usuarioEncontrado = await verificarRegistro.verificarRegistro(usuario);

    // Verificar si el nombre de usuario ya existe y no corresponde al usuario que se está actualizando
    if (usuarioEncontrado != null && usuarioEncontrado.id_usuario !== req.params.id_usuario) {
      return res.status(409).json({ message: "Nombre de usuario existente, intente con otro nombre" }); // Conflict
    }

    const registroActualizado = await ModeloUusarios.update(req.body, {
      where: { id_usuario: req.params.id_usuario },
    });

    if (registroActualizado[0] !== 0) {
      res.status(200).json({ message: "Usuario actualizado con éxito" }); // OK
    } else {
      res.status(404).json({ error: "Usuario no encontrado" }); // Not Found
    }
  } catch (error) {
    res.status(500).json({ error: error.message }); // Internal Server Error
  }
};
