var config  = require('../../config').optimize.html.production;

var gulp    = require('gulp');
var htmlmin = require('gulp-htmlmin');


// Minimize and optimize HTML,
// to strip whitespace (e.g. between <li>).
gulp.task('optimize:html:production', function() {
  return gulp.src(config.src)
    .pipe(htmlmin(config.options))
    .pipe(gulp.dest(config.dest));
});
