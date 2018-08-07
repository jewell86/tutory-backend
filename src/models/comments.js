const db = require('../../knex')

function getAll(tutorialId) {
  return db('comments')
    .where({ tutorials_id: tutorialId })
    // .then(([response]) => response)
}

function create({userId, tutorialId, content}) {
  const commentObj = {
    users_id: userId,
    tutorials_id: tutorialId,
    content: content
  }
  return db('comments')
    .insert(commentObj)
    .returning('*')
}

module.exports = {
  getAll,
  create
}