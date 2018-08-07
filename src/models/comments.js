const db = require('../../knex')

function getAll(id) {
  return db('comments')
    .where({ tutorials_id: id })
    // .then(([response]) => response)
}

module.exports = {
  getAll
}