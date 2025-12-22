import {test, expect} from '@playwright/test';

import { PlaywrightPage } from "../../POM/Playwright Site/PlaywrightPage";

test.describe('Playwright page h1 header validation', () => {
  let playwrightPage: PlaywrightPage

  test.beforeEach(async ({page}) => {
    playwrightPage = new PlaywrightPage(page)
    await playwrightPage.goto()
  })

  test('Validate h1 header', async () => {
    await expect(playwrightPage.h1Header).toContainText('Playwright enables reliable end-to-end testing for modern web apps.')
  })
})
