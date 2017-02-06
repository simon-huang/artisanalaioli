'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.uploadbill',
  'myApp.addfriend',
  'myApp.split',
  'myApp.services',
  'myApp.auth',
  'myApp.bills'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}
])
.run(function($rootScope, $http, $window) {
  $rootScope.signout = function() {
    console.log('trying to sign out');
    $http({
      method: 'POST',
      url: '/auth/logout/'
    })
    .then(function(response) {
      console.log('logged out', response);
      $rootScope.signedIn = false;
      $window.location.href = '/#!/signin';
    })
    .catch(function(error) {
      console.log('Error: ', error);
    });
  }
});
