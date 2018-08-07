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


  // .avg('value')
  //   .where({id: tutorialId})
}

module.exports = {
  avgRating
}