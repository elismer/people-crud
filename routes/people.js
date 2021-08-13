const express = require('express')
const router = express.Router()
const { getAllPeople, getPerson } = require('../controllers/people.controller')

router.get('/', getAllPeople)

router.get('/:email', getPerson)

module.exports = router
