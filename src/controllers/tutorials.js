const model = require('../models/tutorials')
const { parseToken } = require('../lib/auth')

//populate all tutorials on main page - no auth
async function getAll(req, res, next) {
  const response = await model.getAll()
  res.json({ response })
}

async function getOne(req, res, next) {
  const response = await model.getOne(req.params.tutorialId)
  res.json({ response })
}

async function create(req, res, next) {
  try {
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id
    const response = await model.create({ ...req.body, users_id: userId })
    res.status(201).json({ response })
  } catch (e) {
    next({
      status: 400,
      error: `Tutorial could not be created`
    })
  }
}

async function update(req, res, next) {
  const id = req.params.tutorialId
  const response = await model.update(id, req.body)
  res.json({ response })
}

async function destroy(req, res, next) {
  const id = req.params.tutorialId
  const response = await model.destroy(id)
  res.json({ response })
}

async function getMyTutorials(req, res, next) {
  const token = parseToken(req.headers.authorization)
  const userId = token.sub.id
  const response = await model.getMyTutorials(userId)
  res.json({ response })
}

async function getMyCreatedTutorials(req, res, next) {
  const token = parseToken(req.headers.authorization)
  const userId = token.sub.id
  const response = await model.getMyCreatedTutorials(userId)
  res.json({ response })
}

module.exports = {
  getAll, getOne, create, update, destroy, getMyTutorials, getMyCreatedTutorials
}
