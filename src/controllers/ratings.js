const model = require('../models/ratings')
const { parseToken } = require('../lib/auth')
async function create(req, res, next) {
  try {
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id
    const { tutorialId } = req.params
    const { rating } = req.body

    const response = await model.create(rating)
    
    const ratingId = response.id

    console.log(`ratingID: ${ratingId}`)
    // HOW DO I TIE MESSAGE IN ERROR TO WHAT DISPLAYS IN CATCH BLOCK???
    if (!ratingId) throw Error()// Error('Error: rating did not successfully write to table')
    await model.updateUsersRatings(userId, ratingId)
    await model.updateTutorialsRatings(tutorialId, ratingId)
    res.status(201).json({ response })

  } catch (e) {
    // console.error(`${e}`)
    next({
      status: 400,
      error: String(e) || 'Could not create rating'
    })
  }
}

module.exports = {
  create
}