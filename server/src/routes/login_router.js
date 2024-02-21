const { Router }= require('express')
const router = Router();
const {Login}= require('../controllers/administradores/Login')


router.post('/login', Login)

module.exports = router