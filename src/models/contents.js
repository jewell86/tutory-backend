const db = require('../../knex')

function create(req, res, next) {
  return db('contents')
    .insert(req)
    .returning('*')
    .then(([tutorialContent]) => tutorialContent)
}


module.exports = { create }
