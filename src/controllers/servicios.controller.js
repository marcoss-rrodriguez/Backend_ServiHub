import ModeloRegistros from '../models/servicios.models';

export const mostrarSevicios = async (req, res) => {
    try {
      const servicios = await ModeloServicios.findAll();
      res.json(servicios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const añadirServicios = async (req, res) => {
    try {
      const nuevoServico = await ModeloServicios.create(req.body);
      res.json(nuevoServico);
    } catch (error) {
      res.status(500).json({ error: error.message});
    }
  };
  
  export const recibirPorServicios = async (req, res) => {
    try {
      const servicio = await ModeloServicios.findByPk(req.params.categorias);
      if (servicio) {
        res.json(servicio);
      } else {
        res.status(404).json({ error: 'Servicio no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const borrarServico = async (req, res) => {
    try {
      const numServicosEliminados = await ModeloServicios.destroy({
        where: { id_servicios: req.params.id_servicios }
      });
      if (numServicosEliminados) {
        res.json({ message: 'Servicio eliminado con éxito' });
      } else {
        res.status(404).json({ error: 'Servicio no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const actualizarServicio = async (req, res) => {
    try {
      const servicioActualizado = await ModeloServicios.update(req.body, {
        where: { id_servicios: req.params.id_servicios }
      });
      if (servicoActualizado[0] !== 0) {
        res.json({ message: 'Servicio actualizado con éxito' });
      } else {
        res.status(404).json({ error: 'Servicio no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  