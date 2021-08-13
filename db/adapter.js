const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const crypto = require('crypto')
const json = require('./db.json')
const type = new FileSync('./db.json')

const db = low(type)
db.defaults(json).write()

const create = ({ person }) => {
  // Write in db.json
  person.id = crypto.randomBytes(20).toString('hex')
  db.get('people').push(person).write()
  return person
}

const read = ({ email }) => {
  const person = db.get('people').find({ email: email }).value()
  if (person) {
    delete person.id
    return person
  }
}

const update = ({ id, data }) => {
  const person = db.get('people').find({ id }).value()
  const personUpdate = { ...person, ...data }
  db.get('people')
    .find({ id })
    .assign({ ...personUpdate })
    .write()
  return personUpdate
}

const deleted = ({ id }) => {
  db.get('people').remove({ id }).write()
  return id
}

const list = () => {
  const people = db.get('people').value()
  return people.map(person => {
    const { id, ...data } = person
    return data
  })
}

module.exports = { create, read, update, deleted, list }
