'use strict'

const path = require('path')
const pug = require('pug')
const Resolver = require('./resolver')
const log = require('../logger')

function Renderer (templatePath) {
  const render = (locals) => new Promise((resolve, reject) => {
    const resolvePug = new Resolver(path.join(process.cwd(), templatePath))
    return resolvePug().then((resolvedPath) => {
      try {
        const jadeLocals = Object.assign({}, locals)
        const html = pug.renderFile(resolvedPath, jadeLocals)
        log.info(` ====> Rendering HTML for ${templatePath}...`)
        return resolve(html)
      } catch (err) {
        log.info(` ====> ERROR rendering HTML for ${templatePath}!`)
        log.error(err)
        return reject(err)
      }
    }).catch((err) => reject(err))
  })
  render.prototype = this.prototype
  return render
}

module.exports = Renderer
