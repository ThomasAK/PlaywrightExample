import {test, expect} from '@playwright/test';

import {MainPage} from "../../POM/LoginSite/MainPage";
import {LoginPage} from "../../POM/LoginSite/LoginPage";


test.describe('Main Page Login Failure validation', () => {
    let mainPage: MainPage
    let loginPage: LoginPage
    const username = 'testuser'
    const password = 'testpass'
    const badUsername = 'badusername'
    const badPassword = 'badpassword'

    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page)
        loginPage = new LoginPage(page)
        await mainPage.goto()
    })

    test('Validate you cant log in with bad user and good pass', async () => {
        await mainPage.login(badUsername, password)
        expect(loginPage.page.url()).toContain(loginPage.url)
        await expect(loginPage.header).toContainText(`Invalid credentials.`)
    })

    test('Validate you cant log in with good user and bad pass', async () => {
        await mainPage.login(username, badPassword)
        expect(loginPage.page.url()).toContain(loginPage.url)
        await expect(loginPage.header).toContainText(`Invalid credentials.`)
    })

    test('Validate you cant log in with bad user and bad pass', async () => {
        await mainPage.login(badUsername, badPassword)
        expect(loginPage.page.url()).toContain(loginPage.url)
        await expect(loginPage.header).toContainText(`Invalid credentials.`)
    })
})