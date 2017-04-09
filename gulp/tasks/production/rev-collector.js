var config  = require('../../config').collect;

var gulp    = require('gulp');
var collect = require('gulp-rev-collector');


// Replace all links to asset files via a manifest file
gulp.task('rev:collect', function() {
  return gulp.src(config.src)
    .pipe(collect())
    .pipe(gulp.dest(config.dest));
});
