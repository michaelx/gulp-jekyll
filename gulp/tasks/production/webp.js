var config = require('../../config').webp;

var gulp   = require('gulp');
var webp   = require('gulp-webp');


// Generate WebP image versions
gulp.task('webp', function() {
  return gulp.src(config.src)
    .pipe(webp(config.options))
    .pipe(gulp.dest(config.dest));
});
