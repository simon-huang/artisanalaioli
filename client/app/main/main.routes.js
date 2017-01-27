'use strict';

export default function routes($routeProvider) {
  'ngInject';

  $routeProvider.when('/', {
    template: '<main></main>'
  });
  $routeProvider.when('/options', {
    template: '<options></options>'
  });
  $routeProvider.when('/bill', {
    template: '<bill></bill>'
  });
}
