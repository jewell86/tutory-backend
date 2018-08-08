const model = require('../models/users-tutorials')
const { parseToken } = require('../lib/auth')

async function create(req, res, next) {
  try {
    const response = await model.create(req.body)
    res.status(201).json({ response })
  } catch (e) {
    next({ status: 400, error: String(e) || 'Could not add tutorial to watchlist' })
  }
}

module.exports = { create }
