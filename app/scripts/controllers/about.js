'use strict';

/**
 * @ngdoc function
 * @name theOneAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the theOneAppApp
 */
angular.module('theOneAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
