import { getConnection, sql, queriesRegistro } from "../database";

export const mostrarRegistros = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queriesRegistro.mostrarRegistros);
    //console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const añadirRegistro = async (req, res) => {
  const {
    id_tipo,
    nombre,
    apellido,
    correo_electronico,
    numero_celular,
    usuarios,
    contraseña,
    fecha_nacimiento,
    sexo,
  } = req.body;

  if (
    nombre == null ||
    apellido == null ||
    correo_electronico == null ||
    numero_celular == null ||
    usuarios == null ||
    fecha_nacimiento == null ||
    contraseña == null ||
    sexo == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Llena todos los campos" });
  }
  if (id_tipo == null) id_tipo = 0;

  try {
    const pool = await getConnection();

    pool
      .request()
      .input("id_tipo", sql.Int, id_tipo)
      .input("nombre", sql.VarChar, nombre)
      .input("apellido", sql.VarChar, apellido)
      .input("correo_electronico", sql.Text, correo_electronico)
      .input("numero_celular", sql.Int, numero_celular)
      .input("usuarios", sql.VarChar, usuarios)
      .input("contraseña", sql.VarChar, contraseña)
      .input("fecha_nacimiento", sql.VarChar, fecha_nacimiento)
      .input("sexo", sql.Text, sexo)
      .query(queriesRegistro.añadirRegistro);

    res.json({
      id_tipo,
      nombre,
      apellido,
      correo_electronico,
      numero_celular,
      usuarios,
      contraseña,
      fecha_nacimiento,
      sexo,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const recibirRegistroPorId = async (req, res) => {
  const { id_usuarios } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id_usuarios", id_usuarios)
    .query(queriesRegistro.recibirRegistroPorId);

  res.send(result.recordset[0]);
};

export const borrarRegistro = async (req, res) => {
  const { id_usuarios } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id_usuarios", id_usuarios)
    .query(queriesRegistro.borrarRegistro);

  if (result.rowsAffected[0] > 0) {
    res.send("Registro eliminado con éxito");
  } else {
    res.send("No se encontró ningún registro con el ID proporcionado");
  }
};

export const actualizarRegistro = async (req, res) => {
  const {
    id_tipo,
    nombre,
    apellido,
    correo_electronico,
    numero_celular,
    usuarios,
    fecha_nacimiento,
    contraseña,
    sexo,
  } = req.body;
  const { id_usuarios } = req.params;
  if (
    id_tipo == null ||
    nombre == null ||
    apellido == null ||
    correo_electronico == null ||
    numero_celular == null ||
    usuarios == null ||
    fecha_nacimiento == null ||
    contraseña == null ||
    sexo == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Llena todos los campos" });
  }
  const pool = await getConnection();
  await pool
    .request()
    .input("id_tipo", sql.Int, id_tipo)
    .input("nombre", sql.VarChar, nombre)
    .input("apellido", sql.VarChar, apellido)
    .input("correo_electronico", sql.Text, correo_electronico)
    .input("numero_celular", sql.Int, numero_celular)
    .input("usuarios", sql.VarChar, usuarios)
    .input("contraseña", sql.VarChar, contraseña)
    .input("fecha_nacimiento", sql.VarChar, fecha_nacimiento)
    .input("sexo", sql.Text, sexo)
    .input("id_usuarios", sql.Int, id_usuarios)
    .query(queriesRegistro.actualizarRegistro);

  res.json({
    id_tipo,
    nombre,
    apellido,
    correo_electronico,
    numero_celular,
    usuarios,
    contraseña,
    fecha_nacimiento,
    sexo,
  });
};
