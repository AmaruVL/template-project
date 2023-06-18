const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {}
  usuario.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: DataTypes.STRING,
      correo: DataTypes.STRING,
      contrasena: DataTypes.STRING,
      estado: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'usuario',
    },
  );
  return usuario;
};
