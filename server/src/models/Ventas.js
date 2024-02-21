const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Ventas', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    Payments: {
      type: DataTypes.INTEGER,
    },
    Commissions: {
      type: DataTypes.STRING
    },
    Effective_References: {
      type: DataTypes.STRING
    },
    Validations: {
      type: DataTypes.STRING
    },
    Morosos: {
        type: DataTypes.STRING
      },
      Accounting: {
        type: DataTypes.STRING
      },

      
  }, );
};
