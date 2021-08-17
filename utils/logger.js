const fs = require('fs')
const out = fs.createWriteStream(__dirname + '/logs/out.log')
const err = fs.createWriteStream(__dirname + '/logs/err.log')

const consoleFile = new console.Console(out, err)

const log = out => {
  consoleFile.log(new Date().toISOString(), out)
}

const error = err => {
  consoleFile.error(new Date().toISOString(), err)
}

module.exports = { log, error }
