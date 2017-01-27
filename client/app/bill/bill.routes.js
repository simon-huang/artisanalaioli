'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/bill', {
      template: '<bill></bill>'
    });
}
