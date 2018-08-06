
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    { id: 1, username: 'name', email: 'test@test.com', password: 'bear' },
    { id: 2, username: 'test', email: 'green@test.com', password: 'orange' },
    { id: 3, username: 'other', email: 'blue@test.com', password: 'psqd' }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`)
  })
}
