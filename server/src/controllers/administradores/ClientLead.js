const { Leads, Lotes} = require('../../db');
require('dotenv').config();

module.exports = {
    ClientLead: async (req, res) => {
        const {clientId} = req.params

    try {
      const lead = await Leads.findByPk(clientId)
      console.log("Detalles del cliente en lead");
      res.status(200).send(lead)

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
