'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './options.routes';

export class OptionsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('divyUpApp.options', [ngRoute])
  .config(routes)
  .component('options', {
    template: require('./options.html'),
    controller: OptionsComponent,
    controllerAs: 'optionsCtrl'
  })
  .name;
