console.log('Seeding Comments')

exports.seed = function(knex, Promise) {
  return knex('comments').insert([
    { id: 1, users_id: 1, tutorials_id: 1, content: 'Great tutorial!' },
    { id: 2, users_id: 1, tutorials_id: 1, content: 'It was ok...' },
    { id: 3, users_id: 1, tutorials_id: 2, content: 'Great tutorial!' },
    { id: 4, users_id: 2, tutorials_id: 10, content: 'Your tutorial sucks!' },
    { id: 5, users_id: 2, tutorials_id: 3, content: 'It was ok...' },
    { id: 6, users_id: 2, tutorials_id: 3, content: 'Can you do a motorcycle riding tutorial next?' },
    { id: 7, users_id: 3, tutorials_id: 4, content:  'Great tutorial!' },
    { id: 8, users_id: 4, tutorials_id: 9, content: 'My face looks like Mimi now, thanks!' },
    { id: 9, users_id: 4, tutorials_id: 4, content: 'This tutorail is for chumps' },
    { id: 10, users_id: 5, tutorials_id: 3, content: 'Great tutorial!' },
    { id: 11, users_id: 5, tutorials_id: 1, content: 'It was ok...' },
    { id: 12, users_id: 5, tutorials_id: 2, content: 'Can you do a painting tutorial next?' },
    { id: 13, users_id: 6, tutorials_id: 2, content: 'Great tutorial!' },
    { id: 14, users_id: 6, tutorials_id: 3, content: 'This tutorail is for chumps' },
    { id: 15, users_id: 7, tutorials_id: 3, content: 'Great tutorial!' },
    { id: 17, users_id: 7, tutorials_id: 3, content: 'It was ok...' },
    { id: 18, users_id: 7, tutorials_id: 4, content: 'Great tutorial!' },
    { id: 19, users_id: 8, tutorials_id: 9, content: 'Where did you get that great shirt?' },
    { id: 20, users_id: 8, tutorials_id: 1, content: 'asdfasdfasdfffasdfasdfasdfff 1 1 1 1 1' },
    { id: 22, users_id: 8, tutorials_id: 3, content: 'Great tutorial!' },
    { id: 23, users_id: 9, tutorials_id: 2, content: 'Can you do a turtle tutorial next?' },
    { id: 24, users_id: 10, tutorials_id: 10, content: 'What if I dont have any makeup?' },
    { id: 25, users_id: 11, tutorials_id: 3, content: 'It was ok...' },
    { id: 26, users_id: 12, tutorials_id: 24, content: 'Can you do a dog tutorial now?' },
    { id: 27, users_id: 13, tutorials_id: 26, content: 'Great tutorial!' },
    { id: 28, users_id: 13, tutorials_id: 10, content: 'Great tutorial!' },
    { id: 29, users_id: 11, tutorials_id: 30, content: 'This tutorail is for chumps' }

  ])
  .then(() => {
    return knex.raw(`SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments))`)
  })
}
