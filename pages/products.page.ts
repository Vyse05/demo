import { Locator, Page, expect } from "@playwright/test";

export class ProductsPage{ 
    readonly page: Page;
    readonly addFirstProductToCartButton: Locator;
    readonly oneProductInCartLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.addFirstProductToCartButton = page.getByRole('button', { name: 'ADD TO CART' }).first();
        this.oneProductInCartLink = page.getByRole('link', { name: '1' });
    }

    public async addFirstProductToCart(URL){
        await this.addFirstProductToCartButton.click();
        await this.oneProductInCartLink.click();
        await expect(this.page).toHaveURL(URL);

    }
}