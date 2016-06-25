var gulp   = require('gulp');
var rsync  = require('gulp-rsync');
var config = require('../../config').rsync;

// Copy files and folder (via rsync) to server
gulp.task('rsync', function() {
  return gulp.src(config.src)
    .pipe(rsync(config.options));
});
