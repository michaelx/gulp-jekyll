var gulp        = require('gulp');
var cp          = require('child_process');
var browsersync = require('browser-sync');
var runSequence = require('run-sequence');
var config      = require('../../config').jekyll.development;

// Build the Jekyll site
gulp.task('jekyll', function(done) {
  browsersync.notify('Compiling Jekyll');

  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--source=' + config.src, '--destination=' + config.dest, '--config=' + config.config, config.option], { stdio: 'inherit' })
  .on('close', done);
});

// Rebuild the Jekyll site, and optimize HTML
// to strip whitespaces (e.g. between <li>).
gulp.task('jekyll-rebuild', function(callback) {
  runSequence('jekyll', 'optimize:html', 'browsersync:reload', callback);
});