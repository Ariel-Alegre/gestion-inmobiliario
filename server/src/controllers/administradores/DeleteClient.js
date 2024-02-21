const { Leads } = require('../../db');

module.exports = {
  DeleteClient: async (req, res) => {
    const { clientId } = req.params;

    try {
      // Verificar si la publicación existe
      const client = await Leads.findByPk(clientId);

      if (!client) {
        console.log('Publicación no encontrada');
        return res.status(404).json({ message: 'Publicación no encontrada' });
      }

      // Eliminar la publicación
      await client.destroy();
      console.log('Publicación eliminada exitosamente');
      res.status(200).json({ message: 'Publicación eliminada exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
