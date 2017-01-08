import ng from 'angular';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import nguibootstrap from 'angular-ui-bootstrap';
import ngResource from 'angular-resource';
import ngFileUpload from 'ng-file-upload';
import MainController from './MainController.js';

require('./style.css');

var dependentModules = [nguibootstrap, ngResource, ngFileUpload];

var app = ng.module('app', dependentModules);

app.config(['$httpProvider', function config($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
  $httpProvider.defaults.useXDomain = true;
}]);

app.config(['$locationProvider', function config($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
}]);

app.controller(
  'MainController',
  ['$scope', '$resource', '$http', '$timeout', '$location',
  function ($scope, $resource, $http, $timeout, $location) {
    return new MainController($scope, $resource, $http, $timeout, $location);
  }]);
