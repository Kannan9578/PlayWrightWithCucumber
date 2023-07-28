import { Page } from 'playwright';
// import {page} from '../utils/hooks'
import {expect} from '@playwright/test'

export class ProductPage{

    page:Page;

    constructor(page:Page){
        this.page=page;
    }
    
    async selectInventoryItem(productName:string){
        const child=await this.page.getByText(productName);
        await this.page.locator('[class="inventory_item"]').filter({has:child}).getByRole('button',{name:'ADD TO CART'}).click();
        await this.page.screenshot();
    }

    async isProductAddedInCart(prdCount: number)
    {
        const product_count=await this.page.locator('#shopping_cart_container span').innerText();
        expect(parseInt(product_count)).toEqual(prdCount);
    }
}