'use strict'

const src = [
  'app.js',
  'home/home.js'
]

const scripts = (() => {
  const app = []
  const dist = []
  for (let i in src) {
    app.push(`./app/src/${src[i]}`)
    dist.push(`./app/dist/${src[i]}`)
  }
  return {app, dist}
})()

module.exports = {
  app: scripts.app,
  dist: scripts.dist,
  vendor: [
  ]
}
