const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Lotes', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Lote: {
      type: DataTypes.STRING,
    },
    Precio_por_metro: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    Metros_totales: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Precio_total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    Id_path: {
      type: DataTypes.STRING,
    },
    D: {
      type: DataTypes.STRING(1000), // Aquí establece la longitud máxima permitida para el campo D
    },
    status: {
      type: DataTypes.INTEGER,
    }
  }, {
    timestamps: false
  });
};

