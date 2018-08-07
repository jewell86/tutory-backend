const { SECRET_KEY } = process.env
const { sign, verify } = require('jsonwebtoken')
const db = require('../db')

function createToken (id) {
  const sub = { sub: { id } }
  const options = { expiresIn: '1 day' }
  return sign(sub, SECRET_KEY, options)
}

function parseToken (header) {
  const token = header && header.split('Bearer ')[1]
  return verify(token, SECRET_KEY)
}

function isLoggedIn (req, res, next) {
  try {
    parseToken(req.headers.authorization)
    next()
  } catch (e) {
    next({
      status: 401,
      error: `Incorrect or missing token.`
    })
  }
}

async function isAuthorized (req, res, next) {
  try {
    const authorization = req.headers.authorization
    if (!authorization) {
      const message = `You are not authorized to access this route`
      return next({ status: 401, error: message })
    }

    const token = parseToken(authorization)
    const userId = token.sub.id

    //enter code to authorize users to view their 'my tutorials' page
    // const myTutorials = req.params.myTutorialsId || req.params.mytutorialsid
    // const tutorials = await db('tutorials').where({ id: myTutorialsId }).first()
    // if (tutorials.user_id !== userId) {
    //   const message = `You are not authorized to view these tutorials`
    //   return next({ status: 401, error: message })
    // }

    next()
  } catch (e) {
    next({
      status: 401,
      error: `You are not authorized to access this route.`
    })
  }
}

module.exports = {
  createToken,
  parseToken,
  isLoggedIn,
  isAuthorized
}
