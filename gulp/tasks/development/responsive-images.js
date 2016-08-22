var gulp        = require('gulp');
var imageResize = require('gulp-image-resize');
var rename      = require('gulp-rename');
var changed     = require('gulp-changed');
var config      = require('../../config').responsiveImages;

// Create responsive images
gulp.task('responsive-images', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(imageResize(config.options))
    .pipe(rename(function (path) { path.basename += config.outputSuffix; }))
    .pipe(gulp.dest(config.dest));
});
