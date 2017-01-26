'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './bill.routes';

export class BillComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('divyUpApp.bill', [ngRoute])
  .config(routes)
  .component('bill', {
    template: require('./bill.html'),
    controller: BillComponent,
    controllerAs: 'billCtrl'
  })
  .name;
