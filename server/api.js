'use strict'

const api = require('express').Router()
const Renderer = require('./renderer')

api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

api.get('/', (req, res) => {
  const render = new Renderer('app/views/index')
  render()
    .then((html) => res.send(html))
    .catch((err) => res.send({status: 500, message: JSON.stringify(err)}))
})

module.exports = api
