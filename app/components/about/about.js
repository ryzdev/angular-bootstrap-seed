'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'components/about/about.html',
    controller: 'aboutCtrl'
  });
}])

.controller('aboutCtrl', [function() {

}]);