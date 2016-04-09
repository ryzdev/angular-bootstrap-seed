describe('navBar', function () {

    var navBarCtrl, $controller;

    beforeEach(module('myApp.navBar'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it("should home button active by default", function () {
        navBarCtrl = $controller('navBarController');
        expect(navBarCtrl.clicked.home).toBeTruthy();
    });
});