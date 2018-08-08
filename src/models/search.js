const db = require('../../knex')

function searchUsers(q) {
  const typeFieldSql = db.raw('? as type', [`user`])
  q = q.toLowerCase()
  return db
    .select('id', 'username', 'photo_url', typeFieldSql)
    .whereRaw(`LOWER(username) LIKE ?`, [`%${q}%`])
    .from(`users`)
}

function searchTutorials(q) {
  const typeFieldSql = db.raw('? as type', [`tutorial`])
  q = q.toLowerCase()
  return db
    .select('id', 'img', 'title', 'users_id', typeFieldSql)
    .whereRaw(`LOWER(title) LIKE ?`, [`%${q}%`])
    .from(`tutorials`)
}

module.exports = {
  searchUsers,
  searchTutorials
}