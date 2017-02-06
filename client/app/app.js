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
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});

  //$httpProvider.interceptors.push(function($q, $location) {
  //  return {
  //    response: function(response) {
  //      console.log('jdjdjdjd');
  //      return response;
  //    },
  //    responseError: function(response) {
  //      if (response.status === 401) {
  //        $location.url('/signin');
  //        console.log('1231232');
  //      }
  //      console.log('hey');

  //      return $q.reject(response);
  //    }
  //  }
  //});
}
]);
