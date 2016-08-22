var gulp      = require('gulp');
var size      = require('gulp-size');
var uncss     = require('gulp-uncss');
var nano      = require('gulp-cssnano');
var config    = require('../../config').optimize.css;

// Optimize CSS files
gulp.task('optimize:css', function() {
  return gulp.src(config.src)
    .pipe(uncss(config.options.uncss))
    .pipe(nano())
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
