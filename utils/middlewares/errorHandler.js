const logger = require('../logger')
const { config } = require('../../config')

const whitStack = err => {
  const { message, stack } = err
  if (config.dev) {
    return { msg: message, stack: stack }
  }
  return { msg: message }
}

const logError = (err, req, res, next) => {
  logger.error(err)
  next(err)
}

const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500)
  res.json(whitStack(err))
}

module.exports = { errorHandler, logError }
