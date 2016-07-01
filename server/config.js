'use strict'

const nodeEnv = process.env.NODE_ENV
const config = {
  log: {}
}

if (nodeEnv === 'development') {
  config.log.consoleLevel = 'debug'
  config.log.logentriesLevel = 'debug'
} else if (nodeEnv === 'production' || nodeEnv === 'staging') {
  config.log.consoleLevel = 'info'
  config.log.logentriesLevel = 'info'
} else if (nodeEnv === 'test') {
  config.log.consoleLevel = 'error'
  config.log.logentriesLevel = 'error'
} else {
  console.error('NODE_ENV set to invalid value. Exiting.')
  process.exit(1)
}

config.contentful = {
  host: process.env.contentful_host,
  space: process.env.contentful_space,
  accessToken: process.env.contentful_token
}

module.exports = config
