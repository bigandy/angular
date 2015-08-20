/* global require */
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	Server = require('karma').Server,
	serve = require('gulp-serve'),
	sass = require('gulp-sass');


gulp.task('js', function () {
	gulp.src([
		'bower_components/angular/angular.min.js',
	])
	.pipe(uglify().on('error', gutil.log))
	.pipe(concat('script.min.js'))
	.pipe(gulp.dest('build/js'));
});

gulp.task('sass', function () {
	gulp.src([
		'bower_components/bootstrap/dist/css/bootstrap.min.css'
	])
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('./css'));
});

gulp.task('serve', serve({
	port: 3000
}));

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
