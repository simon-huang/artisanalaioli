'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/options', {
      template: '<options></options>'
    });
}
