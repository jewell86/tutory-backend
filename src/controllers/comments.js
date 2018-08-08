const model = require('../models/comments')
const { parseToken } = require('../lib/auth')

async function create(req, res, next) {
  try {
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id
    const tutorialId = req.params.tutorialId

    const response = await model.create({ ...req.body, userId, tutorialId })
    res.status(201).json({ response })

  } catch (e) {
    console.error(e)
    next({ status: 400, error: 'Comment could not be created' })
  }

}

module.exports = {
  create
}