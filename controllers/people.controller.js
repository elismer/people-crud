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

const createPerson = (req, res, next) => {
  const { person } = req.body
  const newPerson = personService.createPerson({ person })
  res.json({ newPerson })
}

const updatePerson = (req, res, next) => {
  const { id, data } = req.body
  const personUpdated = personService.updatePerson({ id, data })
  res.json({ personUpdated })
}

const deletePerson = (req, res, next) => {
  const { id } = req.body
  const idDeleted = personService.deletePerson({ id })
  res.json({ idDeleted })
}

module.exports = {
  getAllPeople,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
}
