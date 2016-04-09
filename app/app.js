'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.navBar',
    'myApp.home',
    'myApp.about'
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
