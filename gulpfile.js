var gulp = require('gulp');
var sass = require('gulp-sass');
var bower = require('gulp-bower');

gulp.task('sass', function () {
  return gulp.src('.client/styles/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('.client/styles/scss/**/*.scss', ['sass']);
});

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('public/lib'));
});


gulp.task('build', ['sass', 'bower']);
