const personService = require('../services/person.services')

const getAllPeople = (req, res, next) => {
  const people = personService.getAllPeople()
  res.json({ people })
}

const getPerson = (req, res, next) => {
  const { email } = req.params
  const person = personService.getPerson({ email })
  person ? res.json({ person, msg: 'Person found' }) : res.sendStatus(404)
}

module.exports = { getAllPeople, getPerson }
