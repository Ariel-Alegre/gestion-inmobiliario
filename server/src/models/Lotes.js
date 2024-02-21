const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Lotes', {
    id: {
    /*   type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, */
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Lotes: {
      type: DataTypes.STRING,
    },

  


    
    

    
     
 





  },);
};
