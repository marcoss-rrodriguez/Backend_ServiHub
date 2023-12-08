const ModeloUsuarios = require("../models/usuarios.models.js");

async function verificarLogin(usuario) { //////Cuando este finalizado enviar unicamente la variable que contenga el nombre de usuario
    try {
      const usuarioEncontrado = await ModeloUsuarios.findOne({
        where: {
          nombre_usuario: usuario.nombre_usuario,
        },
      });
  
      if (usuarioEncontrado) {
        if (usuarioEncontrado.contraseña === usuario.contraseña) {
          console.log('Inicio de sesión exitoso');
          return usuarioEncontrado;
        } else {
          console.log('Contraseña incorrecta');
          return null;
        }
      } else {
        console.log('Usuario no encontrado');
        return null;
      }
    } catch (error) {
      console.error('Error al buscar el usuario:', error);
      return null;
    }
  }

  module.exports = {
    verificarLogin,
  };
