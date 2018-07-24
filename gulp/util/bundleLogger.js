// Provides gulp style logs to the bundle method in browserify.js

var log          = require('fancy-log');
var prettyHrtime = require('pretty-hrtime');
var startTime;


module.exports = {
  start: function(filepath) {
    startTime = process.hrtime();
    log('Bundling\x1b[32m', filepath, '\x1b[0m');
  },

  end: function(filepath) {
    var taskTime = process.hrtime(startTime);
    var prettyTime = prettyHrtime(taskTime);
    log('Bundled\x1b[32m', filepath, '\x1b[0m' + 'after' + '\x1b[35m', prettyTime, '\x1b[0m');
  }
};
