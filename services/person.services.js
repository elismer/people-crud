const db = require('../db/adapter')

const getAllPeople = () => {
  return db.list()
}

const getPerson = ({ email }) => {
  return db.read({ email })
}

module.exports = { getAllPeople, getPerson }
