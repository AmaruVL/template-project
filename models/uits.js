const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class uits extends Model {}
  uits.init(
    {
      idUit: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uit: DataTypes.FLOAT,
      anio: DataTypes.INTEGER,
      baseLegal: DataTypes.STRING,
      fechaPublicacion: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: 'uits',
      underscored: true,
      createdAt: 'fechaCreacion',
      updatedAt: 'fechaModificacion',
    },
  );
  return uits;
};
