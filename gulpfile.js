'use strict'

const banner = require('gulp-banner')
const compass = require('gulp-compass')
const concat = require('gulp-concat')
const embedTemplates = require('gulp-angular-embed-templates')
const gulp = require('gulp')
const ngAnnotate = require('gulp-ng-annotate')
const opn = require('opn')
const path = require('path')
const rename = require('gulp-rename')
// const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
// const watch = require('gulp-watch')
const webserver = require('gulp-webserver')
const stripDebug = require('gulp-strip-debug')

const pkg = require('./package.json')
const appScripts = require('./index').app
// const distScripts = require('./index').dist
const vendorScripts = require('./index').vendor

const serverConfig = {
  host: 'localhost',
  port: '4000' || process.env.PORT
}

const appComment = '/*\n' +
    ' * <%= pkg.name %> <%= pkg.version %>\n' +
    ' * <%= pkg.description %>\n' +
    ' * <%= pkg.homepage %>\n' +
    ' * Copyright 2016 <%= pkg.author %>\n' +
    ' */\n'

const vendorComment = '/*\n' +
    ' * <%= pkg.name %> <%= pkg.version %>\n' +
    ' * <%= pkg.description %>\n' +
    ' * <%= pkg.homepage %>\n' +
    ' * Copyright 2016 <%= pkg.author %>\n' +
    ' */\n'

gulp.task('sass', () => {
  console.log(path.join(__dirname, 'app'))
  gulp.src('./app/assets/*.scss')
    .pipe(compass({
      project: path.join(__dirname, 'app/assets'),
      import_path: '../../node_modules',
      sass: './sass',
      css: '../dist',
      image: './image',
      style: 'compressed'
    }))
    .pipe(gulp.dest('app/dist'))
})

gulp.task('build', () => {
  gulp.src(appScripts)
    .pipe(embedTemplates({basePath: `${__dirname}/app`}))
    .pipe(ngAnnotate())
    .pipe(concat(`${pkg.name}.js`))
    .pipe(gulp.dest('app/dist'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(banner(appComment, { pkg: pkg }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/dist'))
})

gulp.task('vendor', () => {
  gulp.src(vendorScripts)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('app/dist'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(banner(vendorComment, { pkg: pkg }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/dist'))
})

gulp.task('bundle', () => {
  gulp.src(['app/dist/vendor.js', `app/dist/${pkg.name}.js`])
    .pipe(concat(`${pkg.name}.bundle.js`))
    .pipe(gulp.dest('app/dist'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(banner(appComment, { pkg: pkg }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/dist'))
})

gulp.task('webserver', () => {
  gulp.src('./app')
    .pipe(webserver({
      host: serverConfig.host,
      port: serverConfig.port,
      livereload: true,
      directoryListing: false
    }))
})

gulp.task('open', () => opn(`http://${serverConfig.host}:${serverConfig.port}`))

gulp.task('serve', ['webserver', 'open'])
