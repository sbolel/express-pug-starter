'use strict'

const fs = require('fs')
const log = require('../logger')

function Resolver (path) {
  this.path = `${path}.pug`
  const self = this
  const resolvePug = () =>
    new Promise((resolve, reject) =>
      fs.access(self.path, fs.F_OK, (err) => {
        if (err) {
          log.err(err)
          reject(err)
        } else {
          log.info('Success')
          resolve(self.path)
        }
      })
    )
  resolvePug.prototype = this.prototype
  return resolvePug
}

module.exports = Resolver
