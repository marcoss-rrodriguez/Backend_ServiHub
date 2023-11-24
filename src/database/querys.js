export const queriesProducto = {
  getAllProducts: "SELECT * FROM Products",
  addNewproducts:
    "INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)",
  getProductById: "SELECT * FROM Products Where Id = @Id",
  deleteProductById: "DELETE FROM [webstore].[dbo].[Products] WHERE Id = @Id",
  updateProductById:
    "UPDATE Products SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
};

export const queriesRegistro = {
  mostrarRegistros: "SELECT * FROM registros",
  añadirRegistro:
    "INSERT INTO registros (id_tipo, nombre, apellido, correo_electronico, numero_celular, usuarios, contraseña, fecha_nacimiento, sexo) VALUES (@id_tipo, @nombre, @apellido,  @correo_electronico, @numero_celular, @usuarios, @contraseña, @fecha_nacimiento, @sexo)",
  recibirRegistroPorId: "SELECT * FROM registros Where id_usuarios = @id_usuarios",
  borrarRegistro: "DELETE FROM [ServiHubDataBase].[dbo].[registros] WHERE id_usuarios = @id_usuarios",
  actualizarRegistro:
    "UPDATE registros SET id_tipo = @id_tipo, nombre = @nombre, apellido = @apellido, correo_electronico = @correo_electronico, numero_celular = @numero_celular, usuarios = @usuarios, contraseña = @contraseña, fecha_nacimiento = @fecha_nacimiento, sexo = @sexo WHERE id_usuarios = @id_usuarios",
};
