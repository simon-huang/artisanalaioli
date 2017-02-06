angular.module('myApp.bills', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/bills', {
    templateUrl: 'user-details/bills.html',
    controller: 'BillsController'
  });
}])

.controller('BillsController', function ($scope, $http) {
  $scope.bills = [];
  $scope.retrieved = false;

  $http({
    method: 'GET',
    url: '/bills'
  })
  .then(function(response) {
    console.log('response: ', response);
    if (Array.isArray(response.data)) {
      $scope.bills = response;
      $scope.retrieved = true;
    }

  })
  .catch(function(error) {
    console.log('Error: ', error);
  })
});