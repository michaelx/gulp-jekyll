var gulp        = require('gulp');
var runSequence = require('run-sequence');


// Run all tasks needed for a build, in defined order
gulp.task('build', function(callback) {
  runSequence('delete',
  [
    'jekyll',
    'styles',

    // If you don’t want to use Browserify,
    // replace 'scripts-browserify' with:
    //'scripts',
    //'scripts:standalones',
    'scripts-browserify',

    'images'
    //'responsive-images'
    //'copy:fonts'
  ],
  //'base64',
  [
    'optimize:html'
    //'copy:fonts:production'
  ],
  callback);
});
