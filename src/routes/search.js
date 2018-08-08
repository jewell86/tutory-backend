const router = require('express').Router()
const ctrl = require('../controllers/search')

router.get('/', ctrl.search)


module.exports = router