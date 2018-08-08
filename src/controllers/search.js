const model = require('../models/search')

async function search(req, res, next) {
  try {
    const userResponse = await model.searchUsers(req.query.q)
    const tutorialResponse = await model.searchTutorials(req.query.q, 'tutorial')
    const response = userResponse.concat(tutorialResponse)
    res.status(200).json({ response })
  } catch (e) {
    next({
      status: 400,
      error: String(e) || 'could not return search results'
    })
  }
}

module.exports = {
  search
}