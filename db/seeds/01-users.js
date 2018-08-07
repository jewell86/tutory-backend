const bcrypt = require('bcryptjs')
console.log('Seeding Users')

exports.seed = function(knex, Promise) {
  return knex('users').insert([
    { id: 1, username: 'john', email: 'white@test.com', password: bcrypt.hashSync('bear', 8) },
    { id: 2, username: 'johnny', email: 'green@test.com', password: bcrypt.hashSync('cat', 8) },
    { id: 3, username: 'robert', email: 'blue@test.com', password: bcrypt.hashSync('dog', 8) },
    { id: 4, username: 'jimmy', email: 'red@test.com', password: bcrypt.hashSync('deer', 8) }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`)
  })
}
