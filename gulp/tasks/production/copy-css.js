var gulp      = require('gulp');
var size      = require('gulp-size');
var config    = require('../../config').copycss;

// Copy CSS files
gulp.task('copy:css', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});