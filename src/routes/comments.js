const router = require('express').Router()
const ctrl = require('../controllers/comments')

router.get('/', ctrl.getAll)

module.exports = router