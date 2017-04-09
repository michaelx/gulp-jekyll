var config   = require('../../config').optimize.images;

var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var size     = require('gulp-size');


// Copy and minimize images
gulp.task('optimize:images', function() {
  return gulp.src(config.src)
    .pipe(imagemin([
        imagemin.gifsicle(config.imageminPluginOptions.gifsicle),
        imagemin.jpegtran(config.imageminPluginOptions.jpegtran),
        imagemin.optipng(config.imageminPluginOptions.optipng),
        imagemin.svgo(config.imageminPluginOptions.svgo)
      ],
      config.imageminOptions)
    )
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
