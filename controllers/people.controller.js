const personService = require('../services/person.services')
const debug = require('debug')('app:server')

const getAllPeople = (req, res, next) => {
  const { first_name, last_name, gender } = req.query
  debug({ first_name, last_name, gender })
  const people = personService.getAllPeople({ first_name, last_name, gender })
  debug({ people })
  res.status(200).json({ people })
}

const getPerson = (req, res, next) => {
  const { email, ip_addres } = req.params
  debug({ email, ip_addres, body: req.body })
  const person = personService.getPerson({ email, ip_addres })
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
