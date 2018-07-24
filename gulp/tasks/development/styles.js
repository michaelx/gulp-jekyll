var config            = require('../../config').styles;

var gulp              = require('gulp');
var postcss           = require('gulp-postcss');
var advancedVariables = require('postcss-advanced-variables');
var presetEnv         = require('postcss-preset-env');
var nested            = require('postcss-nested');
var mqpacker          = require('css-mqpacker');
var cssnano           = require('cssnano');
var plumber           = require('gulp-plumber');
var sourcemaps        = require('gulp-sourcemaps');
var browsersync       = require('browser-sync');

function onError(err) {
  console.log(err);
  // Keep gulp from hanging on this task
  this.emit('end');
}


// Run CSS through PostCSS and it’s plugins.
// Build sourcemaps and minimize.
gulp.task('styles', function() {
  browsersync.notify('Transforming CSS with PostCSS');

  // PostCSS plugins
  var processors = [
    advancedVariables(config.options.advancedVariables),
    presetEnv(config.options.presetEnv),
    nested(config.options.nested),
    mqpacker(config.options.mqpacker),
    cssnano(config.options.cssnano)
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
