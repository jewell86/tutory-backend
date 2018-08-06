console.log('03-users-tutorials')
exports.seed = function(knex, Promise) {
  return knex('users_tutorials').insert([
    { id: 1, users_id: 1, tutorials_id: 5 },
    { id: 2, users_id: 1, tutorials_id: 6 },
    { id: 3, users_id: 2, tutorials_id: 1 },
    { id: 4, users_id: 3, tutorials_id: 1 },
    { id: 5, users_id: 3, tutorials_id: 2 },
    { id: 6, users_id: 3, tutorials_id: 6 },
    { id: 7, users_id: 4, tutorials_id: 1 },
    { id: 8, users_id: 4, tutorials_id: 4 }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('users_tutorials_id_seq', (SELECT MAX(id) FROM users_tutorials))`)
  })
}
