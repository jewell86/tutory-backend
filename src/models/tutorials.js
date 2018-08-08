const db = require('../../knex')
const commentsModel = require('./comments')
const ratingsModel = require('./ratings')

//get all tutorials from db w/o comments
function getAll() {
  return db('tutorials')
}

//get single tutorial from db w/ comments
function getOne(id) {
  return db('tutorials')
    .select('id', 'users_id', 'title', 'description', 'img', 'created_at', 'updated_at')
    .where({ id }).first()
    .then(async tutorial => {
      try {
        if (!tutorial) return {}
        const comments = await commentsModel.getAll(id)
        const rating = await ratingsModel.avgRating(id)
        tutorial.avg_rating = rating ? rating.avg : null
        var urls = await db('contents').select('url').where('contents.tutorials_id', id)
        urls = urls.map(urlObj => urlObj = urlObj.url)
        tutorial["urls"] = urls
        return { tutorial, comments }
      } catch (e) {
        throw new Error(e)
      }
    })
}

async function addURLsToTutorials(tutorial, id) {
  try {
    var urls = await db('contents').select('url').where('contents.tutorials_id', id)
    urls = urls.map(urlObj => urlObj = urlObj.url)
    tutorial["urls"] = urls
    return commentsModel.getAll(id)
      .then(comments => {
        return { tutorial, comments }
      })
  } catch (e) {
    throw new Error(e)
  }
}

//find one tutorial w/o comments
function find(id) {
  return db('tutorials').where({ id }).first()
}

//create tutorial in db
function create(body) {
  return db('tutorials')
    .insert(body)
    .returning('*')
    .then(([response]) => response)
}

//update tutorial in db
function update(id, body) {
  return find(id).then(response => {
    return db('tutorials')
      .update({
        ...response,
        ...body,
        updated_at: new Date()
      })
      .where({ id })
      .returning('*')
      .then(([response]) => response)
  })
}

//delete tutorial from db
function destroy(id) {
  return db('tutorials')
    .where({ id })
    .del()
    .returning('*')
    .then(([response]) => response)
}

//get individual user's added tutorials from db
function getMyTutorials(userId) {
  return db('usersTutorials')
    .where({ user_id: userId })
    .join('tutorials', 'tutorials.id', 'usersTutorials.tutorial_id')
    .then(([response]) => response)
}

//get individual user's created tutorials from db
function getMyCreatedTutorials(userId) {
  return db('tutorials')
    .where({ created_by_id: userId })
    .then(([response]) => response)
}

module.exports = {
  getAll, getOne, find, create, update, destroy, getMyTutorials, getMyCreatedTutorials
}
