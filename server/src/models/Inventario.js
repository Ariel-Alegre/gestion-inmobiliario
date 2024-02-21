const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Inventario', {
    id: {
      type:DataTypes.INTEGER, 
      autoIncrement: true,

      allowNull: false,
      primaryKey: true,
 /*      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, */
    },
    Lote: {
      type: DataTypes.STRING
    },
    Area: {
      type: DataTypes.INTEGER
    },
  
    PricesM2: {
      type: DataTypes.INTEGER,
    },
    PriceTotal: {
      type: DataTypes.INTEGER,
    },


  }, );
};
