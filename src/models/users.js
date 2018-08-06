const { promisify } = require('util')
const db = require('../../knex')
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
    console.log(username, password)
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
function viewProfile (userId) {
  return db('users')
    .where({ id: userId })
    .then(async ([ user ]) => {
        if (!user) throw new Error()
        return user
    })
}    

//view personal profile - same as viewProfile but we might want to change it so I kept it
function myProfile (userId) {
  return db('users')
    .where({ id: userId })
    .then(async ([ user ]) => {
        if (!user) throw new Error()
        return user
    })
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

module.exports = {
  create, login, viewProfile, myProfile, update
}