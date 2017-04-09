var config = require('../../config').copyfonts.development;

var gulp   = require('gulp');


// Copy fonts to build folder
gulp.task('copy:fonts', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
