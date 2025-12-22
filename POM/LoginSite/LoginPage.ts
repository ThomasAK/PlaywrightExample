import {type Locator, type Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly header: Locator;
    readonly logoutButton: Locator;
    readonly url: string;


    constructor(page: Page) {
        this.page = page;
        this.header = page.locator('h1');
        this.logoutButton = page.getByRole('button', { name: 'Logout' });
        this.url = 'localhost:3000/login';
    }

    async logout(){
        await this.logoutButton.click();
    }

}