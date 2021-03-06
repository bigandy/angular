'use strict';

/**
 * @ngdoc function
 * @name wpapiApp.controller:PostsAutoCtrl
 * @description
 * # PostsCtrl
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
	var pendingTask;

	function fetch() {
		// Load posts from the WordPress API
		$http({
			cache: true,
			method: 'GET',
			url: 'https://big-andy.co.uk/wp-json/wp/v2/posts',
			params: {
				'filter[posts_per_page]' : $scope.ctrl.number
			}
		}).
		success( function( data ) {
			$scope.posts = data;
		});
	}

	// Change the number of posts if the number in the input is changed
	$scope.change = function() {
		if (pendingTask) {
			clearTimeout(pendingTask);
		}
		pendingTask = setTimeout(fetch(), 800);
	};


}]);
