var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var bower = require('gulp-bower');
var babel = require('gulp-babel');

gulp.task('sass', function () {
  return gulp.src('./client/styles/scss/index.scss')
    .pipe(concat('styles.scss'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./client/styles/scss/**/*.scss', ['sass']);
});

gulp.task('babelify', () => {
	return gulp.src('./client/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./public/js'));
});

gulp.task('babelify:watch', function () {
  gulp.watch('./client/**/*.js', ['babelify']);
});

// gulp.task('bundle', function () {
// 	return gulp.src(['./bower_components'])
//     .pipe(babel({
//       presets: ['es2015']
//     }))
// 		.pipe(requirejsOptimize())
//     .pipe(concat('bundle.js'))
// 		.pipe(gulp.dest('public'));
// });

// gulp.task('bower', function() {
//   return bower()
//     .pipe(gulp.dest('./public/lib'));
// });


gulp.task('build', ['sass', 'bower']);
