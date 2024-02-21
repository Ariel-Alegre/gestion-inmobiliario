const { Leads } = require('../../db');
require('dotenv').config();

module.exports = {
  AllLead: async (req, res) => {
    try {
      // Obtener todos los leads ordenados por fecha de creación
      const leads = await Leads.findAll({
        order: [['createdAt', 'ASC']], // 'ASC' para obtener en orden ascendente (por fecha de creación)
      });

      console.log("Todos los leads");
      res.status(200).send(leads);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
