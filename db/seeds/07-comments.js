console.log('Seeding Comments')

exports.seed = function(knex, Promise) {
  return knex('comments').insert([
    { id: 1, users_id: 1, tutorials_id: 1, content: 'asdfasdfasdfffasdfasdfasdfff 1 1 1 1 1' },
    { id: 2, users_id: 1, tutorials_id: 1, content: 'asdfasdfasdfffasdfasdfasdfff 2 2 2 2 2' },
    { id: 3, users_id: 1, tutorials_id: 2, content: 'asdfasdfasdfffasdfasdfasdfff 3 3 3 3 3' },
    { id: 4, users_id: 2, tutorials_id: 2, content: 'asdfasdfasdfffasdfasdfasdfff 4 4 4 4 4' },
    { id: 5, users_id: 2, tutorials_id: 3, content: 'asdfasdfasdfffasdfasdfasdfff 5 5 5 5 5' },
    { id: 6, users_id: 2, tutorials_id: 3, content: 'asdfasdfasdfffasdfasdfasdfff 6 6 6 6 6' },
    { id: 7, users_id: 3, tutorials_id: 4, content: 'asdfasdfasdfffasdfasdfasdfff 7 7 7 7 7' },
    { id: 8, users_id: 4, tutorials_id: 4, content: 'asdfasdfasdfffasdfasdfasdfff 8 8 8 8 8' }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments))`)
  })
}
