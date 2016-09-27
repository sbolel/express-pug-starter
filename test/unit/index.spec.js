const assert = require('chai').assert
const request = require('supertest')

const server = require('../../server')

describe('express server', () => {
  before(() => {
    this.server = server
  })

  beforeEach(() => {
    this.server = server
  })

  afterEach(() => {
    this.server.close()
  })

  it('should return an Express Object when instantiated', () => {
    assert.typeOf(this.server, 'object', 'server export is an object')
    assert.strictEqual(server.constructor.name, 'Server', 'server export is of type "Server"')
  })

  it('responds with 200 to /', (done) => {
    request(this.server)
      .get('/')
      .expect(200, done)
  })

  it('responds with 404 to all other routes', (done) => {
    request(this.server)
      .get('/foo/bar')
      .expect(404, done)
  })
})
