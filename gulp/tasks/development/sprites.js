var config      = require('../../config').sprites;

var gulp        = require('gulp');
var spritesmith = require('gulp.spritesmith');


// Generate sprite and CSS file, from PNGs
gulp.task('sprites', function() {

  var spriteData = gulp.src(config.src).pipe(spritesmith(config.options));

  spriteData.img
    .pipe(gulp.dest(config.dest.image));

  spriteData.css
    .pipe(gulp.dest(config.dest.css));
});
