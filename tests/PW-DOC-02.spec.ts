import {test, expect, Page} from '@playwright/test';

import { PlaywrightPage } from "../POM/PlaywrightPage";

test.describe('Playwright page h1 header validation', () => {
  let playwrightPage: PlaywrightPage

  test.beforeEach(async ({page}) => {
    playwrightPage = new PlaywrightPage(page)
    await playwrightPage.goto()
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')
  })

  test('Validate h1 header', async () => {
    await expect(playwrightPage.h1Header).toContainText('Playwright enables reliable end-to-end testing for modern web apps.')
  })
})
