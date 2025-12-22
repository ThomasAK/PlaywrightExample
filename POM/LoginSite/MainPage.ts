import {expect, type Locator, type Page} from '@playwright/test';

export class MainPage {
    readonly page: Page;
    readonly header: Locator;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.getByRole('heading', { name: 'Login' });
        this.usernameField = page.getByRole('textbox', { name: 'Username:' });
        this.passwordField = page.getByRole('textbox', { name: 'Password:' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async goto() {
        await this.page.goto('http://localhost:3000/');
        await expect(this.header).toBeVisible()
    }

    async login(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }


}