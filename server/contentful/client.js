const contentful = require('contentful')

module.exports = contentful.createClient({
  host: process.env.CONTENTFUL_HOST,
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_TOKEN
})
