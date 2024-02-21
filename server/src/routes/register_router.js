const { Router }= require('express')
const router = Router();
const {Register}= require('../controllers/administradores/Register')

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../uploads')); // Usa path.join para obtener la ruta absoluta
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    }
  });
  const upload = multer({ storage: storage });

router.post('/register',upload.single('avatar'), Register)

module.exports = router