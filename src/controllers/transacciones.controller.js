import ModeloTransacciones from "../models/transacciones.models";

export const mostrarTransacciones = async (req, res) => {
  try {
    const transacciones = await ModeloTransacciones.findAll();
    res.status(200).json({transacciones});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const añadirTransacciones = async (req, res) => {
  try {
    const nuevoTransacciones = await ModeloTransacciones.create(req.body);
    res.status(201).json({nuevoTransacciones});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const recibirTransaccionesPorId = async (req, res) => {
  try {
    const nuevoTransacciones = await ModeloTransacciones.findByPk(
      req.params.id_transaccion
    );
    if (nuevoTransacciones) {
      res.status(200).json({nuevoTransacciones});
    } else {
      res.status(404).json({ error: "Transaccion no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const borrarTransaccion = async (req, res) => {
  try {
    const numTransaccionesEliminados = await ModeloTransacciones.destroy({
      where: { id_transaccion: req.params.id_transaccion },
    });
    if (numTransaccionesEliminados) {
      res.json({ message: "Transaccion eliminado con éxito" });
    } else {
      res.status(404).json({ error: "Transaccion no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarTransaccion = async (req, res) => {
  try {
    const TransaccionActualizado = await ModeloTransacciones.update(req.body, {
      where: { id_transaccion: req.params.id_transaccion },
    });
    if (TransaccionActualizado[0] !== 0) {
      res.json({ message: "Transaccion actualizado con éxito" });
    } else {
      res.status(404).json({ error: "Transaccion no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
