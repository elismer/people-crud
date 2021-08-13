const db = require('../db/adapter')

const getAllPeople = (req, res, next) => {
  const people = db.list()
  res.json({ people })
}

const getPerson = (req, res, next) => {
  const { email } = req.params
  const person = db.read({ email })
  person ? res.json({ person, msg: 'Person found' }) : res.sendStatus(404)
}

module.exports = { getAllPeople, getPerson }
