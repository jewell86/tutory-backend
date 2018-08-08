const model = require('../models/ratings')
const { parseToken } = require('../lib/auth')
async function create(req, res, next) {
  try {
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id
    const { tutorialId } = req.params
    const { rating } = req.body

    // throw custom error if write to     
    const response = await model.create(rating).catch(() => {
      throw new Error('Ratings failed')
    })
    const ratingId = response.id

    await model.updateUsersRatings(userId, ratingId)
    await model.updateTutorialsRatings(tutorialId, ratingId)
    res.status(201).json({ response })

  } catch (e) {
    console.error(Object.keys(e), e.detail)
    next({
      status: 400,
      error: String(e) || 'Could not create rating'
    })
  }
}

module.exports = {
  create
}