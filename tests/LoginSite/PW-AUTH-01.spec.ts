import {test, expect} from '@playwright/test';
// @ts-ignore
import path from 'path';
import {MainPage} from "../../POM/LoginSite/MainPage";
import {LoginPage} from "../../POM/LoginSite/LoginPage";

const authFile = path.join(__dirname, './playwright/.auth/user.json');

test.describe('Main Page Login validation', () => {
    let mainPage: MainPage
    let loginPage: LoginPage
    const username = 'testuser'
    const password = 'testpass'

    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page)
        loginPage = new LoginPage(page)
        await mainPage.goto()
    })

    test('Validate you can log in', async () => {
        await mainPage.login(username, password)
        expect(loginPage.page.url()).toContain(loginPage.url)
        await expect(loginPage.header).toContainText(`Welcome, ${username}!`)

        //save storage state
        await loginPage.page.context().storageState({ path: authFile });
    })
})
