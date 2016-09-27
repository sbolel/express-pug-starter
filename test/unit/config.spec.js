const assert = require('chai').assert

describe('server/config', () => {
  beforeEach(() => {
    this.config = require('../../server/config')
  })

  it('export config', () => {
    assert.typeOf(this.config, 'object')
  })

  it('has log', () => {
    assert.property(this.config, 'log')
  })

  it('has log.consoleLevel', () => {
    assert.property(this.config.log, 'consoleLevel')
    assert.equal(this.config.log.consoleLevel, 'error')
  })

  it('has log.logentriesLevel', () => {
    assert.property(this.config.log, 'logentriesLevel')
    assert.equal(this.config.log.logentriesLevel, 'error')
  })
})
