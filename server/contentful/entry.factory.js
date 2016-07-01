'use strict'

const client = require('./client')

class ContentfulEntry {
  constructor (id, contentType, include, limit) {
    this._sys = {
      id: id,
      contentType: {
        sys: {
          id: contentType
        }
      }
    }
    this._query = {
      content_type: this._sys.contentType.sys.id,
      include: include || 10,
      limit: 1 || limit,
      'sys.id': this._sys.id
    }
  }
  get query () {
    return this._query
  }
  get () {
    return client.getEntries(this._query)
  }
}

module.exports = ContentfulEntry
