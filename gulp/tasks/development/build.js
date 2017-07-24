var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function(callback) {
  runSequence('delete',
  [
    'jekyll',
    'sass',
    // 'styles', // used for postCSS if necessary
    // 'scripts',
    // 'images',
    // 'copy:fonts'
  ],
  // 'base64',
  callback);
});