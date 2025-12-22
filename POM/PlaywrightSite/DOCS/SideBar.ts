import { type Locator, type Page } from '@playwright/test';

export class SideBar {
    readonly page: Page;
    readonly gettingStartedDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.gettingStartedDropdown = page.getByRole('button', {name: 'Getting Started'});
    }

    async goto() {
        await this.page.goto('https://playwright.dev/docs');
    }



}