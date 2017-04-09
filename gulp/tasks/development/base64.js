var config = require('../../config').base64;

var gulp   = require('gulp');
var base64 = require('gulp-base64');


// Replace URLs in CSS files with base64 encoded data
gulp.task('base64', ['styles'], function() {
  return gulp.src(config.src)
    .pipe(base64(config.options))
    .pipe(gulp.dest(config.dest));
});
