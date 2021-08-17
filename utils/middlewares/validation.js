const validatePerson = (req, res, next) => {
  const { person } = req.body
  console.log({ person })
  const valid =
    JSON.stringify(Object.keys(person)) ===
    JSON.stringify(['first_name', 'last_name', 'email', 'gender', 'ip_address'])
  valid ? next() : res.status(400).send()
}

module.exports = validatePerson
