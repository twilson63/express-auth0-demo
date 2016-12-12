require('dotenv').config()

const express = require('express')
const jwt = require('express-jwt')

const app = express()

const checkJwt = jwt({
  secret: new Buffer(process.env.AUTH0_SECRET, 'base64')
})


app.get('/api', checkJwt, (req, res) => {
  res.send({message: 'you are authorized!'})
})

app.get('/', (req, res) => {
  res.send({message: 'hello world'})
})

if (!module.parent) {
  app.listen(process.env.PORT || 3000)
}

module.exports = app
