const fs = require('fs')

module.exports = function (viewPath) {
  const view = `${viewPath}.pug`
  return () => new Promise((resolve, reject) =>
    fs.access(view, fs.F_OK, err => (!err ? resolve(view) : reject(err)))
  )
}
