var gulp      = require('gulp');
var size      = require('gulp-size');
var config    = require('../../config').optimize.css;

// Copy and optimize CSS files
gulp.task('optimize:css', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
