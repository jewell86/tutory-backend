console.log('01-users')
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    { id: 1, username: 'john', email: 'white@test.com', password: 'bear' },
    { id: 2, username: 'johnny', email: 'green@test.com', password: 'cat' },
    { id: 3, username: 'robert', email: 'blue@test.com', password: 'dog' },
    { id: 4, username: 'jimmy', email: 'red@test.com', password: 'deer' }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`)
  })
}
