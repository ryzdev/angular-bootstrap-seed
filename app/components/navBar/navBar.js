'use strict';

angular.module('myApp.navBar', [])

    .directive("navBar", function () {
        return {
            restrict: "E",
            controller: "navBarController",
            controllerAs: "navBarCtrl",
            templateUrl: "components/navBar/navBar.html"
        }
    })

    .controller("navBarController", function () {
        var navBarCtrl = this;
        navBarCtrl.clicked = {home: true};
    });