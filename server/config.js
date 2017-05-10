// eslint-disable-next-line global-require
if (process.env.NODE_ENV !== 'production' && !process.env.CI) require('dotenv').config()

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
  throw new Error('nodeEnv set to invalid value. Exiting!')
}

module.exports = config
