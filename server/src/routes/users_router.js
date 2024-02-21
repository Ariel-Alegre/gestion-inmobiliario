const { Router }= require('express')
const router = Router();
const {Users}= require('../controllers/administradores/Users')
const {DetailsPersonal}= require('../controllers/administradores/DetailsPersonal')



router.get('/users', Users);
router.get('/user', DetailsPersonal);




module.exports = router