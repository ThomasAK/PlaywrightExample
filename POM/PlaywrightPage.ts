import { type Locator, type Page } from '@playwright/test';

export class PlaywrightPage {
    readonly page: Page;
    readonly h1Header: Locator;

    constructor(page: Page) {
        this.page = page;
        this.h1Header = page.locator('.heroTitle_ohkl');
    }

    async goto() {
        await this.page.goto('https://playwright.dev');
    }


}