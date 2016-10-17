const expect = require('chai').expect

if (!process.env.CI) require('dotenv').config()

const contentfulModule = require('../../server/contentful')
const Entry = require('../../server/contentful/entry.factory')

describe('Contentful', () => {
  describe('Module', () => {
    it('is a valid node module', () => {
      expect(contentfulModule).to.have.all.keys('client', 'Entry')
    })
  })

  describe('client', () => {
    before(() => {
      this.contentful = contentfulModule.client
    })

    it('has default contentful methods', () => {
      expect(this.contentful).to.have.all
        .keys('getAsset', 'getAssets', 'getContentType', 'getContentTypes',
              'getEntries', 'getEntry', 'getSpace', 'parseEntries', 'sync')
    })
  })

  describe('Entry model', () => {
    before(() => {
      this.contentful = contentfulModule.client
      this.entries = {
        valid: new Entry('abc', 'cdv', 10)
      }
    })

    it('constructs a valid object', () => {
      expect(this.entries.valid).to.be.an('object')
    })

    describe('valid entry', () => {
      it('has a valid query member for content_type contentful query', () => {
        expect(this.entries.valid.query).to.be.an('object')
      })

      it('.get() returns a promise', () => {
        expect(this.entries.valid.get()).to.be.a('promise')
      })
    })

    describe('valid entry', () => {
      it('has a valid query member for content_type contentful query', () => {
        expect(this.entries.valid.query).to.be.an('object')
      })

      it('.get() returns a promise', () => {
        expect(this.entries.valid.get()).to.be.a('promise')
      })
    })
  })
})
