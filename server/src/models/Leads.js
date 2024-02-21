const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Leads', {
    id: {
    /*   type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, */
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    ine_passport: {
      type: DataTypes.STRING,
    },
    name_conyugue: {
      type: DataTypes.STRING,
    },

    age_conyugue: {
      type: DataTypes.STRING,
    },


    birthDate: {
      type: DataTypes.STRING,
    },

    age: {
      type: DataTypes.STRING,
    },
    outdoor_Number: {
      type: DataTypes.STRING,
    },
    fractionation_or_colony: {
      type: DataTypes.STRING,
    },
    municipality_or_mayor: {
      type: DataTypes.STRING,
    },
    
    postal_code: {
      type: DataTypes.STRING,
    },

    email: {
      type: DataTypes.STRING,
    },
    avatar: {
      type: DataTypes.STRING,
    },

    phone: {
      type: DataTypes.STRING
    },
    nationality: {
      type: DataTypes.STRING
    },
    curp: {
      type: DataTypes.STRING
    },
    country_of_origin: {
      type: DataTypes.STRING
    },
    rfc: {
      type: DataTypes.STRING
    },
    occupation: {
      type: DataTypes.STRING
    },
    civil_status: {
      type: DataTypes.STRING
    },
    
    country: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    municipality: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    identify_oficial: {
      type: DataTypes.STRING
    },

    proof_of_address: {
      type: DataTypes.STRING
    },
    lote: {
      type: DataTypes.STRING
    },
  


    
    

    
     
 





  },);
};
