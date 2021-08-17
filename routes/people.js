const express = require('express')
const router = express.Router()
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

router.get('/', getAllPeople)

router.get('/:email', getPerson)

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

module.exports = router
