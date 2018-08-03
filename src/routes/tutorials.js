const router = require('express').Router()
const ctrl = require('../controllers/tutorials')
const auth = require('../lib/auth')

//routes that don't require authentication/login
router.get('/', ctrl.getAll) //disp all tutorials on main page
router.get('/:tutorialId', ctrl.getOne) //show one tutorial on a page on click from main page

//routes that can only be accessed by a logged in user
router.post('/', auth.isLoggedIn, ctrl.create) //create a tutorial page
router.patch('/:tutorialId', auth.isAuthorized, ctrl.update)//update a tutorial page
router.delete('/:tutorialId', auth.isAuthorized, ctrl.destroy)//delete a tutorial page

module.exports = router

