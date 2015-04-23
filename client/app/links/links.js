angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
  	$scope.data.links = $http.get('/api/links').
	  success(function(data, status, headers, config) {
	    $scope.data.links = data;
	  });
  };
  // invoke
  $scope.getLinks();
});
