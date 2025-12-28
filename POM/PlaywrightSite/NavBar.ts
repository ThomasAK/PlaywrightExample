import {expect, type Locator, type Page} from '@playwright/test';

export class NavBar {
    readonly page: Page;
    readonly navBar: Locator
    readonly playwrightLogo: Locator;
    readonly searchField: Locator;
    readonly searchInput: Locator;
    readonly searchDropdown: Locator;
    readonly homeButton: Locator;
    readonly docsButton: Locator;
    readonly apiButton: Locator;
    readonly languageButton: Locator;
    readonly communityButton: Locator;
    readonly githubButton: Locator;
    readonly discordButton: Locator;
    readonly lightModeButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.navBar = page.getByRole('navigation', { name: 'Main' })
        this.playwrightLogo = page.getByAltText('Playwright Logo');
        this.searchField = page.locator('.DocSearch-Button-Placeholder');
        this.searchInput = page.getByPlaceholder('Search docs');
        this.searchDropdown = page.locator('.DocSearch-Dropdown');
        this.homeButton = page.getByRole('link', { name: 'Playwright logo Playwright' })
        this.docsButton = page.getByText('Docs' );
        this.apiButton = page.getByRole('link', { name: 'API' });
        this.languageButton = page.locator('(//a[@role=\'button\'])[1]');
        this.communityButton = page.getByRole('link', { name: 'Community' });
        this.githubButton = page.getByLabel('GitHub repository');
        this.discordButton = page.getByLabel('Discord server');
        this.lightModeButton = page.getByRole('button', { name: 'Switch between dark and light' });
    }

    async search(searchInput: string, selector: string): Promise<void> {
        await this.searchField.click()
        await expect(this.searchInput).toBeVisible()

        await this.searchInput.fill(searchInput)
        await expect(this.searchDropdown).toBeVisible()

        await this.page.getByRole('link', { name: selector, exact: true }).click();
    }

}