const db = require('../../knex')

// calculate the avg rating
// inner joins on ratings, user-ratings, tutorial-ratings
function avgRating(tutorialId) {
  return db('ratings')
    .join('users_ratings', 'ratings.id', 'users_ratings.ratings_id')
    .join('tutorials_ratings', 'tutorials_ratings.ratings_id', 'ratings.id')
    .where({ tutorials_id: tutorialId })
    .avg('value')
    .first()
}

function create(rating) {
  return db('ratings')
    .insert({ value: rating })
    .returning('*')
    .then(([rating]) => rating)
}

// helper function to update intermediate table (users_ratings)
function updateUsersRatings(userId, ratingId) {
  return db('users_ratings')
    .insert({ users_id: userId, ratings_id: ratingId })
    .returning('*')
}

// helper function to update intermediate table (tutorials_ratings)
function updateTutorialsRatings(tutorialId, ratingId) {
  return db('tutorials_ratings')
    .insert({ tutorials_id: tutorialId, ratings_id: ratingId })
    .returning('*')
}

module.exports = {
  avgRating,
  create,
  updateUsersRatings,
  updateTutorialsRatings
}