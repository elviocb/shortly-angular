angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $http, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(){
  	$http.post('/api/links', {url: $scope.link.url}).
	  success(function(data, status, headers, config) {
	  	console.log('Link success added');
	  });
  };
});
