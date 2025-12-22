import { type Locator, type Page } from '@playwright/test';

export class Footer {
    readonly page: Page;
    readonly copyright: Locator;

    constructor(page: Page) {
        this.page = page;
        this.copyright = page.locator('.footer__copyright');
    }


}