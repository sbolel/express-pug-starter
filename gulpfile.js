const gulp = require('gulp')
const path = require('path')
const sass = require('gulp-sass')
const fs = require('fs')
const nodemon = require('gulp-nodemon')

function setup (done) {
  const p = new Promise((resolve, reject) => fs.access('.env', fs.F_OK, err =>
    err ? copyFile('.env_sample', '.env', resolve) : resolve()))
  p.then(() => done()).catch(err => done(err))
}


function serve() {
  nodemon({
    ext: 'env js pug scss',
    script: 'server/index.js',
    tasks: changedFiles => {
      const tasks = []
      changedFiles.forEach(file => {
        if (path.extname(file) === '.scss' && !~tasks.indexOf('styles')) {
          tasks.push('styles')
        }
      })
      return tasks
    }
  })
}

function styles () {
  console.log('Rebuilding SASS...')
  return gulp.src('./app/styles/index.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./app/dist'))
}

gulp.task('styles', gulp.series(styles))

gulp.task('default', gulp.series(gulp.parallel(setup, styles), serve))
