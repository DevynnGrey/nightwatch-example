import {nikePageObject} from '@devynngrey/pageobject-helper'

describe('Nike example', function() {
    it('Go to nike.com and validate the home page icon is visible', function(browser) {
      browser
        .navigateTo(nikePageObject.url)
        .waitForElementVisible(nikePageObject.homePageIcon)
        .assert.visible(nikePageObject.homePageIcon)
    }); 
  });