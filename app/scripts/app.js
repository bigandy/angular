'use strict';

/**
 * @ngdoc overview
 * @name theOneAppApp
 * @description
 * # theOneAppApp
 *
 * Main module of the application.
 */

(function(){
  angular
    .module('theOneAppApp', [
      'ngAnimate',
      'ngAria',
      'ngCookies',
      'ngMessages',
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
        .when('/cv', {
          templateUrl: 'views/cv.html',
          controller: 'CVCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    })

    .filter('capitalize', function() {
        return function(input) {
            return input.substring(0, 1).toUpperCase() + input.substring(1);
        };
    });


})();

