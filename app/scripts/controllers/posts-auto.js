'use strict';

/**
 * @ngdoc function
 * @name wpapiApp.controller:PostsAutoCtrl
 * @description
 * # PostsAutoCtrl
 * Controller of the wpapiApp
 */
var app = angular.module('wpapiApp');

app.filter('to_trusted', ['$sce', function($sce){
	return function(text) {
		return $sce.trustAsHtml(text);
	};
}]);

  // Add a controller
app.controller( 'PostsAutoCtrl', ['$scope', '$http', function( $scope, $http ) {
  // Load posts from the WordPress API
  $http({
	cache: true,
	method: 'GET',
	url: 'https://big-andy.co.uk/wp-json/wp/v2/posts',
	params: {
	  'filter[posts_per_page]' : 10
	}
  }).
  success( function( data ) {
	$scope.posts = data;
  });
}]);
