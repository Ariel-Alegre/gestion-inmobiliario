const { User } = require('../../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;

require('dotenv').config();

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
cloudinary.config({
  cloud_name: 'dz0lruj7k',
  api_key: '128323134832632',
  api_secret: '04JixT8UcmHYY-QfbwSTBzT-L7I'
});
module.exports = {
  Register: async (req, res) => {
    const { name, lastName, email, password, phone, role } = req.body;

    try {
      const existingUser = await User.findOne({ where: { email } });

      if (existingUser) {
        console.log('El usuario ya existe');
        return res.status(400).json({ message: 'El usuario ya existe' });
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);


     

      const backgroundColor = getRandomColor(); // Genera un color aleatorio

      const file = req.file;
      let avatarValue = ''; // Valor predeterminado para avatar

      if (file) {
        const cloudinaryUploadResult = await cloudinary.uploader.upload(file.path, {
          resource_type: 'image',
          quality: 'auto:low',
          fetch_format: 'auto',
        });
        console.log('Imagen subida a Cloudinary:', cloudinaryUploadResult.secure_url);
        avatarValue = cloudinaryUploadResult.secure_url;
      }
      const newUser = await User.create({
        name,
        lastName,
        avatar: avatarValue, // Usar el valor predeterminado si no se cargó un archivo
        email,
        password: hashedPassword,
        phone,
        role,
        backgroundColor: backgroundColor, // Asigna el color aleatorio al usuario
      });

      const tokenPayload = { id: newUser.id, role: newUser.role };
      const token = jwt.sign(tokenPayload, process.env.FIRMA_TOKEN );

      console.log('Usuario creado correctamente');
      return res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
