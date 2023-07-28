import {After,Before,BeforeAll,AfterAll} from '@cucumber/cucumber'
import {Browser,Page,chromium,BrowserContext} from 'playwright'
import { test } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { ProductPage } from '../pages/products';

let page: Page
let browser:Browser
let context:BrowserContext
let loginPage:LoginPage;
let productPage:ProductPage;

BeforeAll(async ()=>{
    // test.setTimeout(60000);
    browser=await chromium.launch({
       'headless' :false,
       'timeout':6000
    })
    context=await browser.newContext();
    page=await context.newPage();
    loginPage=new LoginPage(page);
    productPage=new ProductPage(page);
    return page;
})
Before(async ()=>{
    // page=await context.newPage();
    // return page;
})

After(async ()=>{

})

AfterAll(async ()=>{
    await browser.close();
})

export{page,browser,loginPage,productPage}