const { Router }= require('express')
const router = Router();
const {AddLead}= require('../controllers/administradores/AddLead')
const {AllLead}= require('../controllers/administradores/AllLead')
const {ClientLead}= require('../controllers/administradores/ClientLead')
const {UpdateClient}= require('../controllers/administradores/UpdateClient')
const {DeleteClient}= require('../controllers/administradores/DeleteClient')

const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../uploads'));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage }).fields([
    { name: 'identify', maxCount: 1 },
    { name: 'proof', maxCount: 1 },
    { name: 'avatar', maxCount: 1 }

  ]);


router.post('/lead',upload, AddLead);

router.get('/lead/:clientId', ClientLead);
router.put('/lead/:clientId', upload, UpdateClient);
router.delete('/lead/:clientId', DeleteClient);


router.get('/lead', AllLead);


module.exports = router