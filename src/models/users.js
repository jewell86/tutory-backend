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
async function update (userId, body) {
  try {
    var user = await myProfile(userId)
    // console.log(user)
    await updateUser(user, body)
    return await myProfile(userId)
  } catch (e) {
    throw new Error(e)
  }
}

function updateUser (user, body) {
  body = updateBodyObjectWithStaticUserInfo(user, body)
  return db('users')
    .where({ id: user.id })
    .update('username', `${body.username}`)
    .update('email', `${body.email}`)
    .update('password', `${body.password}`)
    .update('photo_url', `${body.photo_url}`)
    .update('first_name', `${body.first_name}`)
    .update('last_name', `${body.last_name}`)
    .update('about_me', `${body.about_me}`)
    .update('public', `${body.public}`)
}

function updateBodyObjectWithStaticUserInfo (user, body) {
  if (!body.id) body["id"] = user.id
  if (!body.username) body["username"] = user.username
  if (!body.email) body["email"] = user.email
  if (!body.password) body["password"] = user.password
  if (!body.photo_url) body["photo_url"] = user.photo_url
  if (!body.first_name) body["first_name"] = user.first_name
  if (!body.last_name) body["last_name"] = user.last_name
  if (!body.about_me) body["about_me"] = user.about_me
  if (Object.keys(body).includes("public")) body["public"] = body.public
  if (!body.created_at) body["created_at"] = user.created_at
  body["updated_at"] = new Date()
  return body
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
