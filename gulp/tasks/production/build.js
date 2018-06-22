var gulp        = require('gulp');
var runSequence = require('run-sequence');


// Run all tasks needed for a build, in defined order
gulp.task('build:production', function(callback) {
  runSequence('delete', 'jekyll:production',
  [
    // Use just 'styles', when CSS sourcemaps
    // are needed on production build.
    'styles:production',

    // If you don’t want to use Browserify,
    // replace 'scripts-browserify' with:
    // 'scripts',
    // 'scripts:standalones',
    'scripts-browserify',

    'images',
    'responsive-images'
    //'copy:fonts'
  ],
  //'base64',
  [
    'copy:css',
    'optimize:js',
    'optimize:json',
    'optimize:xml',
    'optimize:images',
    'optimize:html:production'
    //'copy:fonts:production'
  ],

  // After optimize:html, so that all files exist
  // for Phantom.JS (UnCSS)
  [
    'optimize:css',
    'lint-json'
  ],
  'revision',
  'rev:collect',
  // [
  //   'webp'
  //   'gzip'
  // ],
  callback);
});
