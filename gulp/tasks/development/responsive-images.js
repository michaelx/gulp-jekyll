var config      = require('../../config').responsiveImages;

var gulp        = require('gulp');
var imageResize = require('gulp-image-resize');
var rename      = require('gulp-rename');
var changed     = require('gulp-changed');


// Create responsive images
gulp.task('responsive-images', function() {
  return gulp.src(config.src)

    // Ignore unchanged files
    .pipe(changed(config.dest))

    .pipe(imageResize(config.options))
    .pipe(rename(function (path) { path.basename += config.outputSuffix; }))
    .pipe(gulp.dest(config.dest));
});
