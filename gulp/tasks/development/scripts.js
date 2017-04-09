var config     = require('../../config').scripts;

var gulp       = require('gulp');
var concat     = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');


// Concat JavaScript files,
// and create sourcemaps
gulp.task('scripts', function() {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
      .pipe(concat(config.outputName))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest));
});

// Copy standalone files to build folder
gulp.task('scripts:standalones', function() {
  return gulp.src(config.standaloneFiles)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest));
});
