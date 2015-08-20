var app = angular.module('app', []);

app.filter('to_trusted', ['$sce', function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}]);

// Add a controller
app.controller( 'AppCtrl', ['$scope', '$http', function( $scope, $http ) {
	var app = this,
		pendingTask;

	if ($scope.ctrl.number === undefined) {
		$scope.ctrl.number = 10;
		fetch();
	}


	// Change the number of posts if the number in the input is changed
	$scope.change = function() {
		if (pendingTask) {
			clearTimeout(pendingTask);
		}
		pendingTask = setTimeout(fetch(), 800);
	};

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
		success( function( data, status, headers, config ) {
			$scope.posts = data;
		});
	}
}]);
