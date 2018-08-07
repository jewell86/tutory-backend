const router = require('express').Router()
const ctrl = require('../controllers/users')
const auth = require('../lib/auth')
const tutorialsCtrl = require('../controllers/tutorials')

//routes that don't require authentication/login
router.post('/signup', ctrl.signup) //signup page
router.post('/login', ctrl.login)  //login form
router.get('/:userId', ctrl.viewProfile) //view other user's profiles

//routes that can only be accessed by logged in user
router.get('/:userId/myProfile', auth.isAuthorized, ctrl.myProfile) //view/edit personal profile

router.patch('/:userId/myProfile', auth.isAuthorized, ctrl.update)//update personal profile

router.get('/:userId/myTutorials', auth.isAuthorized, tutorialsCtrl.getMyTutorials) //my tutorials page

router.get('/:userId/myCreatedTutorials', auth.isAuthorized, tutorialsCtrl.getMyCreatedTutorials) //create a tutorial page





module.exports = router
