'use strict';

/**
 * @ngdoc function
 * @name wpapiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wpapiApp
 */
angular.module('wpapiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
