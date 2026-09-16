import { expect, type Locator, type Page } from '@playwright/test';

export class productDetailsPage {
    // Locators
    readonly page: Page;
    readonly addToCartButton: Locator; // add to cart button on product details page
    readonly cartItemTitle: Locator; // cart item title locator on the product details page

    // Constructors
    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.getByRole('button', { name: 'Add To Cart' }).first(); // avoiding multiple add to cart buttons on the page by selecting the first one
        this.cartItemTitle = page.locator("//span[@class='_title_1mvsi_12']")
    };
};