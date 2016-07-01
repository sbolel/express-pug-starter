'use strict'

const gulp = require('gulp')
const banner = require('gulp-banner')
const compass = require('gulp-compass')
const rename = require('gulp-rename')
const path = require('path')
// const watch = require('gulp-watch')

const pkg = require('./package.json')


const appComment = '/*\n' +
    ' * <%= pkg.name %> <%= pkg.version %>\n' +
    ' * <%= pkg.description %>\n' +
    ' * <%= pkg.homepage %>\n' +
    ' * Copyright 2016 <%= pkg.author %>\n' +
    ' */\n'

gulp.task('styles', () => {
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
