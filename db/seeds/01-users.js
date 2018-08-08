const bcrypt = require('bcryptjs')
console.log('Seeding Users')

exports.seed = function(knex, Promise) {
  return knex('users').insert([
    { id: 1, photo_url: "https://strategiccommunications.ua.edu/img/headshots/1703034_BH_193_Jason_Bara.jpg", first_name: 'john', last_name: 'smith', username: 'john76', about_me: "asjdg;asdgkadskghaskdhgk;asdjg;kajsklj djk sdkja sdgj as;dg asjkdhg akjhsdg kasd klja sdklj asdklgj askld;gj aksjhdg  askd asgdj", email: 'white@test.com', password: bcrypt.hashSync('bear', 8) },
    { id: 2, username: 'johnny', email: 'green@test.com', password: bcrypt.hashSync('cat', 8) },
    { id: 3, username: 'robert', email: 'blue@test.com', password: bcrypt.hashSync('dog', 8) },
    { id: 4, username: 'jimmy', email: 'red@test.com', password: bcrypt.hashSync('deer', 8) },
    { id: 5, photo_url: "https://strategiccommunications.ua.edu/img/headshots/1703034_BH_193_Jason_Bara.jpg", first_name: 'Bill', last_name: 'Johnson', username: 'datprivateuser', about_me: "You should basically see none of this, and if you do, that's a problem", email: 'bill@private.com', password: bcrypt.hashSync('private', 8), public: false}
  ])
  .then(() => {
    return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`)
  })
}
