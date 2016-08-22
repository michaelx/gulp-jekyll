var gulp       = require('gulp');
var prettydata = require('gulp-pretty-data');
var size       = require('gulp-size');
var config     = require('../../config').optimize.xml;

// Copy and minimize XML files
gulp.task('optimize:xml', function() {
  return gulp.src(config.src)
    .pipe(prettydata(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
