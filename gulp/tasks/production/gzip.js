var config = require('../../config').gzip;

var gulp   = require('gulp');
var gzip   = require('gulp-gzip');


// Gzip files
gulp.task('gzip', function() {
  return gulp.src(config.src)
    .pipe(gzip(config.options))
    .pipe(gulp.dest(config.dest));
});
