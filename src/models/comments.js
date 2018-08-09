const db = require('../../knex')

function getAll(tutorialId) {
  const selectArr = ['users_id', 'content', 'comments.created_at']
  return db('comments')
    .select(selectArr)
    .where({ tutorials_id: tutorialId })
    // .then(comments => comments.map(commentObj => commentObj.content))

}

function create({ userId, tutorialId, content }) {
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
