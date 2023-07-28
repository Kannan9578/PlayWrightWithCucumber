import { Page } from 'playwright';
// import {page} from '../utils/hooks'
import {expect} from '@playwright/test'


export class LoginPage {


     // add your locator string 
    login_username = '[placeholder="Username"]';
    login_password = '[placeholder="Password"]';
    login_btn = '[type="submit"]';
    page:Page;

    constructor(page:Page){
        this.page=page;
    }
    //add your method to be use
    async navigateToPage(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState("load")

    }
    async enterUserName(username: string) {
        await this.page.waitForSelector(this.login_username);
        await this.page.locator(this.login_username).type(username)

    }

    async enterUserPassword(userpassword: string) {
        await this.page.waitForSelector(this.login_password);
        await this.page.locator(this.login_password).type(userpassword)

    }

    async login(url:string, username:string,password:string){
       await this.navigateToPage(url);
       await this.enterUserName(username);
       await this.enterUserPassword(password);
       await this.clickLoginButton();
    }
    async clickLoginButton()
    {
        await this.page.locator(this.login_btn).click()
    }

    async isPagesTitleDisplayed(titleTxt:string){
        let page_title=await this.page.locator('[class="product_label"]').innerText();
        console.log(page_title);
        expect(page_title).toContain(titleTxt);
    }

    async isErrorMessageDisplayed(errorMsg:string){
        let page_error=await this.page.locator('[data-test="error"]').innerHTML();
        expect(page_error).toContain(errorMsg);
    }
}
