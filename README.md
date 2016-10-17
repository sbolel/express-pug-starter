# express-pug-starter

[![circle-ci][build-image]][build-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![NPM version][npm-image]][npm-url]
[![NPM Dependency Status][daviddm-image]][daviddm-url]
[![js-standard][standard-image]][standard-url]
[![License][license-image]][license-url]
[![NPM downloads][npm-downloads-image]][npm-url]

Requires [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.org/), which can both be installed by following the instructions on https://nodejs.org/. Installing Node.js also installs npm.

Requires [Ruby](https://www.ruby-lang.org/en/) & [Compass](https://rubygems.org/gems/compass) for building styles.

#### Getting Started

```sh
git clone https://github.com/sbolel/express-pug-starter.git
cd express-pug-starter
cp .env_sample .env     # create dotenv file
npm install             # install dependencies
```

##### Server

`npm start` - start application on [localhost:4000](http://localhost:4000/)

`npm run debug` - for debugging, start the app using [nodemon][nodemon]

##### Tests

`npm test` – run tests with [Mocha][mocha], validate standard style, generate coverage report (`.coverage/`)

##### Styles

`npm run sass` - compile scss

`npm run sass:watch` - compile scss, watch for changes

#### Coverage

```
=============================== Coverage summary ===============================
Statements   : 88.18% ( 97/110 )
Branches     : 54.55% ( 12/22 )
Functions    : 100% ( 5/5 )
Lines        : 87.96% ( 95/108 )
================================================================================
```

<!-- LINKS -->

[npm-image]: https://img.shields.io/npm/v/express-pug-starter.svg
[npm-url]: https://npmjs.org/package/express-pug-starter
[npm-downloads-image]: https://img.shields.io/npm/dm/express-pug-starter.svg
[daviddm-image]: https://img.shields.io/david/sbolel/express-pug-starter.svg
[daviddm-url]: https://david-dm.org/sbolel/express-pug-starter
[license-image]: https://img.shields.io/npm/l/express-pug-starter.svg
[license-url]: https://github.com/sbolel/express-pug-starter/blob/master/LICENSE
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
[build-image]: https://circleci.com/gh/sbolel/express-pug-starter.svg?style=shield&circle-token=adca1796b387c863c3923fa3de355ccf7521f6de
[build-url]: https://circleci.com/gh/sbolel/express-pug-starter
[codeclimate-image]: https://codeclimate.com/github/sbolel/express-pug-starter/badges/gpa.svg
[codeclimate-url]: https://codeclimate.com/github/sbolel/express-pug-starter
