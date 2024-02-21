const { User } = require('../../db');


module.exports = {
  Users: async (req, res) => {

    try {
        const users = await User.findAll();

        res.status(200).send(users)
   
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
