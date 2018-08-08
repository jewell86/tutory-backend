const model = require('../models/users')
const auth = require('../lib/auth')

async function signup(req, res, next) {
  try {
    const response = await model.create(req.body)
    const userId = response.id
    const token = auth.createToken(userId)
    res.status(201).json({ token: token, user_id: userId })
  } catch (e) {
    next({ status: 400, error: `User could not be registered` })
  }
}

async function login(req, res, next) {
  try {
    const response = await model.login(req.body)
    const userId = response.id
    const token = auth.createToken(userId)
    res.json({ token: token, user_id: userId })
  } catch (e) {
    next({ status: 401, error: `Email or password is incorrect` })
  }
}

// View another's profile
async function viewProfile(req, res, next) {
  try {
    const userId = req.params.userId
    const response = await model.viewProfile(userId)
    res.json({ response })
  } catch (e) {
    next({ status: 404, error: `User not found` })
  }
}

// View my profile
async function myProfile(req, res, next) {
  try {
    const userId = req.params.userId
    const response = await model.myProfile(userId)
    // const token = auth.createToken(response.id)
    // res.json({ token })
    res.json({ response })
  } catch (e) {
    next({ status: 403, error: `Access forbidden` })
  }
}

// Update my info
async function update(req, res, next) {
  try {
    const userId = req.params.userId
    const body = req.body
    const response = await model.update(userId, body)
    // const token = auth.createToken(response.id)
    // res.json({ token })
    res.json({ response })
  } catch (e) {
    next({ status: 403, error: `Access forbidden` })
  }
}


module.exports = {
  signup, login, viewProfile, myProfile, update
}
