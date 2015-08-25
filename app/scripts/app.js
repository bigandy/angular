'use strict';

/**
 * @ngdoc overview
 * @name wpapiApp
 * @description
 * # wpapiApp
 *
 * Main module of the application.
 */
angular
	.module('wpapiApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl'
			})
			.when('/posts', {
				templateUrl: 'views/posts.html',
				controller: 'PostsCtrl'
			})
			.when('/posts-auto', {
				templateUrl: 'views/posts-auto.html',
				controller: 'PostsAutoCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
