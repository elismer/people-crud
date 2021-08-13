const express = require('express')
const app = express()

const { config } = require('./config')
const people = require('./routes/people')

app.use(express.json())
app.use('/api/people', people)

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`)
})
