var gulp   = require('gulp');
var config = require('../../config').copyfonts.development;

/**
 * Copy fonts to folder
 */
gulp.task('copy:fonts', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
