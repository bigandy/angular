'use strict';

/**
 * @ngdoc function
 * @name theOneAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the theOneAppApp
 */

var hudsons = [
  {
   'name': 'andrew',
   'age': 34,
   'profession': 'web developer',
   'isFit': false,
   'lovesChocolate': true
  },
  {
    'name': 'marion',
    'age': 32,
    'profession': 'chemist',
    'isFit': false,
    'lovesChocolate': true
  }
];

angular.module('theOneAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

  .controller('AboutMe', function(){
    this.details = hudsons;
  });


