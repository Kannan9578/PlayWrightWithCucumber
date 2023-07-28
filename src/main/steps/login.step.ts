import {Given,When,Then} from '@cucumber/cucumber'
import {loginPage} from '../utils/hooks'


Given('goto login Page', async function () {
    // Write code here that turns the phrase above into concrete actions
    loginPage.navigateToPage("https://www.saucedemo.com/v1/");

  });

  When('Enter the {string} and {string}', async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
     await loginPage.enterUserName(username)
     await loginPage.enterUserPassword(password)
  });

  When('click on Login button', async function () {
    // Write code here that turns the phrase above into concrete actions
    await loginPage.clickLoginButton();
  });

  Then('I should see Home Page with title {string}', async function (title:string) {
    // Write code here that turns the phrase above into concrete actions
    await loginPage.isPagesTitleDisplayed(title);

  });

  Then('I should see error message {string}', async function (errorMsge:string) {
    // Write code here that turns the phrase above into concrete actions
    await loginPage.isErrorMessageDisplayed(errorMsge);
    
  });