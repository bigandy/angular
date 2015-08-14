/* global require */
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	Server = require('karma').Server;


gulp.task('js', function () {
	gulp.src([
		'bower_components/angular/angular.min.js',
	])
	.pipe(uglify().on('error', gutil.log))
	.pipe(concat('script.min.js'))
	.pipe(gulp.dest('build/js'));
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
	new Server({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
	new Server({
		configFile: __dirname + '/karma.conf.js'
	}, done).start();
});
