'use strict';

describe('navBar, ', function () {

    var template, element, $document;
    beforeEach(module('myApp.navBar', 'templates'));

    beforeEach(inject(function ($compile, $rootScope, _$document_) {
        $document = _$document_;
        element = angular.element('<nav-bar></nav-bar>');
        template = $compile(element)($rootScope);
        $rootScope.$digest();
    }));

    it('should load navBar, ', function () {
        expect(element.html()).not.toEqual('');
    });

    it("should have active class set on home button on page load, ", function () {
        expect(element.find('li.active').text()).toEqual('Home');
    });

    it("should set active class on about button when clicked, ", function () {
        var aboutButton = 'li:eq(1)';
        element.find(aboutButton).trigger('click');
        expect(element.find('li.active').text()).toEqual('About');
    });
});
