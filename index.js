const express = require('express')
const app = express()

const { config } = require('./config')
const people = require('./routes/people')
const { errorHandler, logError } = require('./utils/middlewares/errorHandler')

//Middleware
app.use(express.json())

// Rutas
people(app)

//Middleware de error
app.use(logError)
app.use(errorHandler)

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`)
})
