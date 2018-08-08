const express = require('express')
const app = express()
const { PORT = 5000, NODE_ENV = 'development' } = process.env

if (NODE_ENV === 'development') {
  require('dotenv').load()
  app.use(require('morgan')('dev'))
}

app.use(require('body-parser').json())
app.use(require('cors')())

app.use('/users', require('./routes/users'))
app.use('/tutorials', require('./routes/tutorials'))
app.use('/users-tutorials', require('./routes/users-tutorials'))
app.use('/tutorials/:tutorialId/comments', require('./routes/comments'))
app.use('/tutorials/:tutorialId/ratings', require('./routes/ratings'))
app.use('/search', require('./routes/search'))

//Users, tutorials, user's added/saved tutorials (many-to-many), comments/reviews, teacher questions

app.use((req, res, next) => {
  const status = 404
  const error = `Could not ${req.method} ${req.url}`

  next({ status, error })
})

app.use((err, req, res, next) => {
  if (NODE_ENV === 'development') console.error(err)

  const message = `Something went wrong.`
  const { status = 500, error = message } = err

  res.status(status).json({ status, error })
})

if (NODE_ENV !== 'testing') {
  const listener = () => console.log(`Listening on port ${PORT}!`)
  app.listen(PORT, listener)
}

module.exports = app
