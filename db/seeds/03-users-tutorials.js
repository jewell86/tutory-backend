
exports.seed = function(knex, Promise) {
  return knex('users_tutorials').insert([
    { id: 1, users_id: 1, tutorials_id: 5 },
    { id: 2, users_id: 1, tutorials_id: 7 },
    { id: 3, users_id: 1, tutorials_id: 16 },
    { id: 4, users_id: 1, tutorials_id: 17 },
    { id: 5, users_id: 1, tutorials_id: 23 },
    { id: 6, users_id: 1, tutorials_id: 24 },
    { id: 7, users_id: 2, tutorials_id: 27 },
    { id: 8, users_id: 2, tutorials_id: 2 },
    { id: 9, users_id: 3, tutorials_id: 26 },
    { id: 10, users_id: 3, tutorials_id: 3 },
    { id: 11, users_id: 4, tutorials_id: 25 },
    { id: 12, users_id: 4, tutorials_id: 4 },
    { id: 13, users_id: 5, tutorials_id: 24 },
    { id: 15, users_id: 5, tutorials_id: 5 },
    { id: 16, users_id: 6, tutorials_id: 23 },
    { id: 17, users_id: 6, tutorials_id: 6 },
    { id: 18, users_id: 7, tutorials_id: 22 },
    { id: 19, users_id: 7, tutorials_id: 7 },
    { id: 20, users_id: 8, tutorials_id: 21 },
    { id: 21, users_id: 8, tutorials_id: 2 },
    { id: 22, users_id: 9, tutorials_id: 20 },
    { id: 23, users_id: 9, tutorials_id: 9 },
    { id: 24, users_id: 10, tutorials_id: 19 },
    { id: 25, users_id: 10, tutorials_id: 10 },
    { id: 26, users_id: 11, tutorials_id: 18 },
    { id: 27, users_id: 11, tutorials_id: 11 },
    { id: 28, users_id: 12, tutorials_id: 17 },
    { id: 29, users_id: 12, tutorials_id: 12 },
    { id: 30, users_id: 13, tutorials_id: 16 },
    { id: 31, users_id: 13, tutorials_id: 13 },
    { id: 32, users_id: 2, tutorials_id: 15 },
    { id: 33, users_id: 3, tutorials_id: 14 }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('users_tutorials_id_seq', (SELECT MAX(id) FROM users_tutorials))`)
  })
}
