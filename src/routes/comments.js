const router = require('express').Router({ mergeParams: true })
const ctrl = require('../controllers/comments')
const auth = require('../lib/auth')

// router.get('/', ctrl.getAll)
router.post('/', auth.isLoggedIn, ctrl.create)

module.exports = router