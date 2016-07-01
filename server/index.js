'use strict'

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express')
const engines = require('consolidate')
const path = require('path')
const api = require('./api')
const pkg = require('../package.json')

const app = express()

app.enable('trust proxy')

app.engine('html', engines.hogan)

app.set('port', process.env.PORT || 4000)

app.set('views', path.resolve(__dirname, '../app'))
app.set('view engine', 'html')

app.locals = {
  pkg
}

app.use(express.static(path.resolve(__dirname, '../app')))

app.use(api)

const server = app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${server.address().port}`)
})
