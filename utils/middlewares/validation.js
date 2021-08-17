const validatePerson = (req, res, next) => {
  const { person } = req.body
  const valid =
    JSON.stringify(Object.keys(person)) ===
    JSON.stringify(['first_name', 'last_name', 'email', 'gender', 'ip_address'])
  valid ? next() : next(new Error('Bad request'))
}

const validateUpdatePerson = (req, res, next) => {
  const { data } = req.body
  const keys = Object.keys(data)
  const setKeys = new Set(keys)
  const notRepeat = setKeys.size === keys.length
  notRepeat ? null : next(new Error('Keys repited'))
  const valuesSet = new Set([
    'first_name',
    'last_name',
    'email',
    'gender',
    'ip_address',
  ])
  const valid = keys.filter(x => !valuesSet.has(x)).length
  !valid ? next() : next(new Error('Bad request'))
}

module.exports = { validatePerson, validateUpdatePerson }
