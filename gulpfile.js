/* global require */
var gulp = require('gulp'),
  gutil = require('gulp-util'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat');


gulp.task('js', function () {
  gulp.src([
      'bower_components/angular/angular.min.js',
    ])
    .pipe(uglify().on('error', gutil.log))
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('build/js'));
});
