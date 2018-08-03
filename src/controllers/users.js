const model = require('../models/users')
const auth = require('../lib/auth')

async function signup (req, res, next) {
  try {
    const response = await model.create(req.body)
    const token = auth.createToken(response.id)
    res.status(201).json({ token })
  } catch (e) {
    next({ status: 400, error: `User could not be registered` })
  }
}

async function login (req, res, next) {
  try {
    const response = await model.login(req.body)
    const token = auth.createToken(response.id)
    res.json({ token })
  } catch (e) {
    next({ status: 401, error: `Email or password is incorrect` })
  }
}

//view another user's profile
async function viewProfile (req, res, next) {
  try {
    const userId = req.params.userId
    const response = await model.viewProfile(userId)
    res.json({ response })
  } catch (e) {
    next({ status: 404, error: `User not found` })
  }  
}

//view personal profile
async function myProfile (req, res, next) {
  try {  
    const userId = req.params.userId
    const response = await model.myProfile(userId)
    const token = auth.createToken(response.id)
    res.json({ token })
  } catch (e) {
    next({ status: 403, error: `Access forbidden` })
  }  
}

//update personal profile
async function update (req, res, next) {
  try {
    const userId = req.params.userId
    const response = await model.update(userId)
    const token = auth.createToken(response.id)
    res.json({ token })
  } catch (e) {
    next({ status: 403, error: `Access forbidden` })
  }
}


module.exports = {
  signup, login, viewProfile, myProfile, update
}
