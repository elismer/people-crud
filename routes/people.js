const express = require('express')
const router = express.Router()
const {
  getAllPeople,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
} = require('../controllers/people.controller')
const validate = require('../utils/middlewares/validation')

router.get('/', getAllPeople)

router.get('/:email', getPerson)

router.post('/', validate, createPerson)

router.put('/', updatePerson)

router.delete('/', deletePerson)

module.exports = router
