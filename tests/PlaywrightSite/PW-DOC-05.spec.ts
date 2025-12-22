import {test, expect} from '@playwright/test';

import { PlaywrightPage } from "../../POM/PlaywrightSite/PlaywrightPage";
import {NavBar} from "../../POM/PlaywrightSite/NavBar";

test.describe('Playwright nav bar validation', () => {
    let playwrightPage: PlaywrightPage
    let navBar: NavBar

    test.beforeEach(async ({page}) => {
        playwrightPage = new PlaywrightPage(page)
        navBar = new NavBar(page)
        await playwrightPage.goto()
    })

    test('Validate Nav bar items', async () => {
        await test.step('validate Nav bar items displayed correctly using screenshot', async () => {
            await expect(navBar.navBar).toHaveScreenshot();
        })
        await test.step('validate Nav bar items are visable', async () => {
            await expect(navBar.homeButton).toBeVisible()
            await expect(navBar.apiButton).toBeVisible()
            await expect(navBar.languageButton).toBeVisible()
            await expect(navBar.communityButton).toBeVisible()
            await expect(navBar.githubButton).toBeVisible()
            await expect(navBar.discordButton).toBeVisible()
            await expect(navBar.lightModeButton).toBeVisible()
            await expect(navBar.searchField).toBeVisible()
        })
    })
})
