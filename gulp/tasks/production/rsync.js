var config = require('../../config').rsync;

var gulp   = require('gulp');
var rsync  = require('gulp-rsync');


// Copy files and folder (via rsync) to server
gulp.task('rsync', function() {
  return gulp.src(config.src)
    .pipe(rsync(config.options));
});
