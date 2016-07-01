'use strict'

const contentful = require('contentful')
const config = require('../config')

module.exports = contentful.createClient({
  host: config.contentful.host,
  space: config.contentful.space,
  accessToken: config.contentful.token
})
