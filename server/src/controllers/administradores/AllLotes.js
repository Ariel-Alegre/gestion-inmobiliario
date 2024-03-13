const { Lotes } = require('../../db');
require('dotenv').config();

module.exports = {
    AllLotes: async (req, res) => {
    try {
      // Obtener todos los leads ordenados por fecha de creación
      const lotes = await Lotes.findAll({
        order: [['id', 'ASC']], // 'ASC' para obtener en orden ascendente (por fecha de creación)
      });
      console.log("Todos los lotes");
      res.status(200).send(lotes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
