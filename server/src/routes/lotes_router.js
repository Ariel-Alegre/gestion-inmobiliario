const { Router }= require('express')
const router = Router();
const {AllLotes}= require('../controllers/administradores/AllLotes')
const {LotesDetails}= require('../controllers/administradores/LotesDetails')



router.get('/lotes', AllLotes)
router.get('/lotes/:loteId', LotesDetails)



module.exports = router