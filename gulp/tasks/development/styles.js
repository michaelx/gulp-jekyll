var config       = require('../../config').styles;

var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var mqpacker     = require('css-mqpacker');
var cssnano      = require('cssnano');
var plumber      = require('gulp-plumber');
var sourcemaps   = require('gulp-sourcemaps');
var gutil        = require('gulp-util');
var browsersync  = require('browser-sync');

function onError (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
}


// Run CSS through PostCSS and it’s plugins.
// Build sourcemaps and minimize.
gulp.task('styles', function() {
  browsersync.notify('Transforming CSS with PostCSS');

  // PostCSS plugins
  var processors = [
    precss(config.options.precss),
    autoprefixer(config.options.autoprefixer),
    mqpacker(config.options.mqpacker),
    cssnano()
  ];

  return gulp.src(config.src)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest));
});
