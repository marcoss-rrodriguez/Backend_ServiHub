
const ModeloUsuarios = require('../models/usuarios.models.js');

 async function verificarRegistro(usuario) {
    try {
      const usuarioEncontrado =  await ModeloUsuarios.findOne({
        where: {
          nombre_usuario: usuario.nombre_usuario
        }
      });
      if (usuarioEncontrado) {
        // console.log('Usuario encontrado:', usuarioEncontrado.toJSON());
        console.log('Usuario encontrado');
        return usuarioEncontrado;

        //console.log('Usuario encontrado');
      } else {
        console.log('Usuario no encontrado');
        return null;
      }
    } catch (error) {
      console.error('Error al buscar el usuario:', error);
    }
  }

  module.exports = { verificarRegistro };