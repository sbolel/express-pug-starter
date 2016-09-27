const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', function () {
  return gulp.src('./app/styles/index.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./app/dist'))
})

gulp.task('sass:watch', function () {
  gulp.watch('./app/**/*.scss', ['sass'])
})

gulp.task('default', ['sass'])
