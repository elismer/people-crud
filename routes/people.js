const express = require('express')
const {
  getAllPeople,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
} = require('../controllers/people.controller')
const {
  validatePerson,
  validateUpdatePerson,
} = require('../utils/middlewares/validation')

const logger = require('../utils/logger')

const peopleRouter = app => {
  const router = express.Router()
  app.use('/api/people', router)
  router.get('/', getAllPeople)

  router.get('/:email-:ip_address', getPerson)

  router.post(
    '/',
    (req, res, next) => {
      logger.log({ date: new Date().toISOString(), ip: req.ip, body: req.body })
      next()
    },
    validatePerson,
    createPerson
  )

  router.put('/', validateUpdatePerson, updatePerson)

  router.delete('/', deletePerson)
}

module.exports = peopleRouter
