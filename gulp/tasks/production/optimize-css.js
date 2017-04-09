var config  = require('../../config').optimize.css;

var gulp    = require('gulp');
var size    = require('gulp-size');
var postcss = require('gulp-postcss');
var uncss   = require('postcss-uncss');
var cssnano = require('cssnano');


// Optimize CSS files with UnCSS
gulp.task('optimize:css', function() {

  var processors = [
    uncss(config.options.uncss),
    cssnano()
  ];

  return gulp.src(config.src)
    .pipe(postcss(processors))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
