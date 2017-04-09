var config = require('../../config').copycss;

var gulp   = require('gulp');
var size   = require('gulp-size');


// Copy CSS files to build folder
gulp.task('copy:css', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});