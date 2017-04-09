var config    = require('../../config').lintStyles;

var gulp      = require('gulp');
var postcss   = require('gulp-postcss');
var stylelint = require('stylelint');
var reporter  = require('postcss-reporter');


// Lint styles
// Executed in watch.js
gulp.task('lint-styles', function() {

  // PostCSS plugins
  var processors = [
    stylelint(config.options.stylelint),
    reporter(config.options.reporter)
  ];

  return gulp.src(config.src)
    .pipe(postcss(processors));
});
