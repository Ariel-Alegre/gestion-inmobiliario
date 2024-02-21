const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Campañas', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    Emails: {
      type: DataTypes.STRING,
    },
    SMS: {
      type: DataTypes.STRING
    },
     Whatassap: {
      type: DataTypes.STRING
    },
    New_Projects: {
      type: DataTypes.STRING
    },
    Reports: {
        type: DataTypes.STRING
      },
      Advisory_Communications: {
        type: DataTypes.STRING
      },
      Training: {
        type: DataTypes.STRING
      },

      
  }, );
};
