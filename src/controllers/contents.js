const model = require('../models/contents')
const { parseToken } = require('../lib/auth')

async function create(req, res, next) {
  try {
    const body = req.body
    const response = await model.create(body)
    res.status(201).json({ response })
  } catch (e) {
    next({ status: 400, error: String(e) || 'Could not create rating' })
  }
}

module.exports = { create }
