var config      = require('../../config').browsersync.production;

var gulp        = require('gulp');
var browsersync = require('browser-sync');


// Run production build task and start a server with BrowserSync
gulp.task('browsersync:production', ['build:production'], function() {
  browsersync(config);
});
