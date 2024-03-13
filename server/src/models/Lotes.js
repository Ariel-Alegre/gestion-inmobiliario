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
      allowNull: false
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
      allowNull: false
    },
    D: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    Status: {
      type: DataTypes.INTEGER,
    },
    Img: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false
  });
};

