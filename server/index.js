const express = require('express')
const path = require('path')
const api = require('./api')
const log = require('./logger')

// new express app
const app = express()

// set express port
if (process.env.NODE_ENV === 'test') {
  app.set('port', 4001)
} else {
  app.set('port', process.env.PORT || 4000)
}

// configure views
app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, '../app'))

// define API routes
app.use(api)

// define static routes
app.use('/css', express.static(path.resolve(__dirname, '../app/assets/css')))
app.use('/dist', express.static(path.resolve(__dirname, '../app/dist')))
app.use('/fonts', express.static(path.resolve(__dirname, '../app/assets/fonts')))
app.use('/img', express.static(path.resolve(__dirname, '../app/assets/img')))
app.use('/js', express.static(path.resolve(__dirname, '../app/assets/js')))
app.use('/favicon.ico', express.static(path.resolve(__dirname, '../app/assets/img/favicon.ico')))

// initialize server
const server = app.listen(app.get('port'), () => {
  log.info(`Express server started on http://localhost:${server.address().port}`)
})

// export server app
module.exports = server
