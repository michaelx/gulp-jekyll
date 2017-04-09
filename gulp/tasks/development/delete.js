var config = require('../../config').delete;

var gulp   = require('gulp');
var del    = require('del');


// Delete folders and files, for a clean build
gulp.task('delete', function() {
  return del(config.src);
});
