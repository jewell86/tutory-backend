const { promisify } = require('util')
const db = require('../db')
const bcrypt = require('bcryptjs')

//signup a user
async function create ({ password, ...body }) {
    const hashed = await promisify(bcrypt.hash)(password, 8)
    return db('users')
        .insert({ ...body, password: hashed })
        .returning('*')
        .then(([response]) => response)
}

//user login
function login ({ username, password }) {
  return db('users')
    .where({ username })
    .then(async ([ user ]) => {
        if (!user) throw new Error()
        const isValid = await promisify(bcrypt.compare)(password, user.password)
        if (!isValid) throw new Error()
        return user
    })
}

//view another user's profile
async function viewProfile (userId) {
  try {
    var [user] = await getUserById(userId)
    if (user.public) {
      user["myTutorials"] = await addUsersCreatedTutorials(user)
      user["tutorialsWatchlist"] = await addUsersTutorialsToUse(user)
    }
    return user
  } catch (e) {
    throw new Error(e)
  }
}

//view personal profile - same as viewProfile but we might want to change it so I kept it
async function myProfile (userId) {
  try {
    var [user] = await getUserById(userId)
    user["myTutorials"] = await addUsersCreatedTutorials(user)
    user["tutorialsWatchlist"] = await addUsersTutorialsToUse(user)
    return user
  } catch (e) {
    throw new Error(e)
  }
}

//update personal user profile
function update (userId, body) {
  return myProfile(userId).then(response => {
      return db('users')
        .update({
            ...response,
            ...body,
            updated_at: new Date()
        })
        .where({ id: userId })
        .returning('*')
        .then(([response]) => response)
  })
}

// #viewProfile methods
function addUsersCreatedTutorials (user) {
  return db('tutorials')
    .select('id', 'title', 'description', 'rating')
    .where({ users_id: user.id })
}

function addUsersTutorialsToUse (user) {
  return db('users_tutorials')
    .join('tutorials', 'tutorials.id', '=', 'users_tutorials.tutorials_id')
    .select('users_tutorials.id', 'tutorials.users_id', 'tutorials.title', 'tutorials.description', 'tutorials.rating')
    .where('users_tutorials.users_id', user.id)
}

function getUserById (id) {
  return db('users').where({ id })
}

module.exports = {
  create, login, viewProfile, myProfile, update
}
