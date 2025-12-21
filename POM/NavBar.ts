import {expect, type Locator, type Page} from '@playwright/test';

export class NavBar {
    readonly page: Page;
    readonly searchButton: Locator;
    readonly searchInput: Locator;
    readonly searchDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchButton = page.locator('.DocSearch-Button-Placeholder');
        this.searchInput = page.locator('#docsearch-input');
        this.searchDropdown = page.locator('.DocSearch-Dropdown');
    }

    async search(searchInput: string, selector: string): Promise<void> {
        await this.searchButton.click()
        await expect(this.searchInput).toBeVisible()

        await this.searchInput.fill(searchInput)
        await expect(this.searchDropdown).toBeVisible()

        await this.page.getByRole('link', { name: selector, exact: true }).click();
    }

}