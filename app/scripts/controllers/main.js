'use strict';

/**
 * @ngdoc function
 * @name theOneAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the theOneAppApp
 */
angular.module('theOneAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
