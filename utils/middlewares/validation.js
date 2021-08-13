const validatePerson = (req, res, next) => {
  const { person } = req.body
  const valid =
    JSON.stringify(Object.keys(person)) ===
    JSON.stringify([
      'id',
      'first_name',
      'last_name',
      'email',
      'gender',
      'ip_address',
    ])
  valid ? next() : res.status(400)
}
