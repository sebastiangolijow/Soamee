const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('author', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  });
};

