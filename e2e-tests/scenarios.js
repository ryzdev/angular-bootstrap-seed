'use strict';

describe('My app, ', function() {

  it('should automatically redirect to /home when location not specified, ', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  describe('Home page, ', function() {

    beforeEach(function() {
      browser.get('index.html#/home');
    });


    it('should render home page when user navigates to /home, ', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/My Homepage/);
    });

  });

  describe('About page, ', function() {

    beforeEach(function() {
      browser.get('index.html#/about');
    });

    it('should render about page when user navigates to /about, ', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/About me/);
    });

  });
});
