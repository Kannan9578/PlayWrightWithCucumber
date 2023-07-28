import {Given,When,Then} from '@cucumber/cucumber'
import { ProductPage } from '../pages/products';
import { LoginPage } from '../pages/login';
import {productPage,loginPage} from '../utils/hooks'
// let productPage=new ProductPage();
// let loginPage=new LoginPage();
let page_url="https://www.saucedemo.com/v1/"
let username="standard_user"
let password="secret_sauce"

Given('Go to productPage', async function(){
    loginPage.login(page_url,username,password);

});

When('Select a Product {string} to cart', async function(productname:string){
    await productPage.selectInventoryItem(productname);

});


Then('I should see product counts {int} in cart icon', async function (productcount: number) {
    // Then('I should see product counts {float} in cart icon', function (float) {
      // Write code here that turns the phrase above into concrete actions
      await productPage.isProductAddedInCart(productcount);

    });



