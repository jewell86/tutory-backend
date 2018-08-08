const router = require('express').Router({ mergeParams: true })

const ctrl = require('../controllers/ratings')
const auth = require('../lib/auth')

router.post('/', auth.isLoggedIn, ctrl.create)


module.exports = router