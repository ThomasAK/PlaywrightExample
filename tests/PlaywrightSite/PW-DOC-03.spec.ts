import {test, expect} from '@playwright/test';

import { PlaywrightPage } from "../../POM/PlaywrightSite/PlaywrightPage";
import {NavBar} from "../../POM/PlaywrightSite/NavBar";

test.describe('Playwright search bar validation', () => {
    let playwrightPage: PlaywrightPage
    let navBar: NavBar

    test.beforeEach(async ({page}) => {
        playwrightPage = new PlaywrightPage(page)
        navBar = new NavBar(page)
        await playwrightPage.goto()
    })

    test('Validate search bar finds and brings you to /docs/locators ', async () => {

        await navBar.search('Locators', 'Locators')
        await expect(navBar.page).toHaveURL('https://playwright.dev/docs/locators')

    })
})
