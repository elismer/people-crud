const db = require('../db/adapter')

const getAllPeople = ({ first_name, last_name, gender }) => {
  return db.list({ first_name, last_name, gender })
}

const getPerson = ({ email }) => {
  return db.read({ email })
}

const createPerson = ({ person }) => {
  return db.create({ person })
}

const updatePerson = ({ id, data }) => {
  return db.update({ id, data })
}

const deletePerson = ({ id }) => {
  return db.deleted({ id })
}

module.exports = {
  getAllPeople,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
}
