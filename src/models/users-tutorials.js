const db = require('../../knex')

function create(req, res, next) {
  return db('users_tutorials')
    .insert(req)
    .returning('*')
    .then(([watchListItem]) => watchListItem)
}


module.exports = { create }
