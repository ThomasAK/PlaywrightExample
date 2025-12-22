import {expect, type Page} from '@playwright/test';

export class ReleaseNotes {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://playwright.dev/docs/release-notes');
        await expect(this.page).toHaveTitle('Release notes | Playwright')
    }


}