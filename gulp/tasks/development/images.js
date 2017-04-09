var config  = require('../../config').images;

var gulp    = require('gulp');
var changed = require('gulp-changed');


// Copy images to build folder
gulp.task('images', function() {
  return gulp.src(config.src)

    // Ignore unchanged files, so that not all images
    // are being copied by the watch task.
    .pipe(changed(config.dest))

    .pipe(gulp.dest(config.dest));
});
