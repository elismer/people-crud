const assert = require('assert')
const testServer = require('../utils/testServer')
const pepole = require('../routes/people')
const db = require('../db/db.json')

describe('routes - people', () => {
  const request = testServer(pepole)
  describe('GET /api/people', function () {
    it('should respond with status 200', function (done) {
      request.get('/api/people').expect(200, done)
    })

    it('should respond with content type json', function (done) {
      request.get('/api/people').expect('Content-type', /json/, done)
    })

    it('should respond with not error', function (done) {
      request.get('/api/people').end((err, res) => {
        assert.strictEqual(err, null)
        done()
      })
    })

    it('should respond with the list of pepole', function (done) {
      request.get('/api/people').end((err, res) => {
        assert.deepEqual(res.body, {
          people: db.people.map(person => {
            const { id, ...data } = person
            return data
          }),
        })
        done()
      })
    })
  })
})
