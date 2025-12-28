import {expect, type Locator, type Page} from '@playwright/test';

export class ProtectedPage {
    readonly page: Page;
    readonly header: Locator;
    readonly url: string;


    constructor(page: Page) {
        this.page = page;
        this.header = page.locator('h1');
        this.url = 'localhost:3000/protected';
    }

    async goto() {
        await this.page.goto(this.url);
        await expect(this.header).toBeVisible()
    }

}