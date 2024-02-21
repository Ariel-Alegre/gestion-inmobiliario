const { Lotes } = require('../../db');
require('dotenv').config();

module.exports = {
    LotesDetails: async (req, res) => {
        const {loteId} = req.params

    try {
      const lote = await Lotes.findByPk(loteId)
      console.log("Detalles del lote");
      res.status(200).send(lote)

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
