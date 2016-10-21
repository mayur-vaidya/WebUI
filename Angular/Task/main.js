var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'StudentController'
		})
		.when('/viewStudents', {
			templateUrl: 'viewStudents.html',
			controller: 'StudentController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});

mainApp.controller('StudentController', ['$scope', 'Response', function($scope, Response) {
$scope.message = "Click on the hyper link to view the students list.";
  var selectedData = function(){
    var url = "http://jsonplaceholder.typicode.com/posts/";
    Response.getData(url)
      .then(function(data) {
        $scope.details =data;
      });
    };
  selectedData();
}]);

mainApp.factory('Response', function ($http) {
  return {
     getData: function(url) {
         return $http.get(url)
           .then(function(response) {
             return response.data;
         });
       }
     };
  });
