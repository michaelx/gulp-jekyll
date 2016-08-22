var gulp           = require('gulp');
var postcss        = require('gulp-postcss');
var precss         = require('precss');
var nano           = require('gulp-cssnano');
var plumber        = require('gulp-plumber');
var gutil          = require('gulp-util');
var browsersync    = require('browser-sync');
var autoprefixer   = require('autoprefixer');
var mqpacker       = require('css-mqpacker');
var config         = require('../../config').styles;

function onError (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
}

// Run CSS through PostCSS and it’s plugins.
//
// No sourcemaps for production.
// Switch to 'styles' task when they are needed
// to debug on production.
var processors = [
  precss(config.options.precss),
  autoprefixer(config.options.autoprefixer),
  mqpacker(config.options.mqpacker)
];

gulp.task('styles:production', function () {
  browsersync.notify('Transforming CSS with PostCSS');

  return gulp.src(config.src)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(postcss(processors))
    .pipe(nano())
    .pipe(gulp.dest(config.dest));
});