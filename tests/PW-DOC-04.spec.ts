import {test, expect} from '@playwright/test';

import { PlaywrightPage } from "../POM/PlaywrightPage";
import {Footer} from "../POM/Footer";

test.describe('Playwright Footer CopyrightValidation', () => {
    let playwrightPage: PlaywrightPage
    let footer: Footer

    test.beforeEach(async ({page}) => {
        playwrightPage = new PlaywrightPage(page)
        footer = new Footer(page)
        await playwrightPage.goto()
        await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')
    })

    test('Validate copyright text in Footer', async () => {
        await expect(footer.copyright).toMatchAriaSnapshot(`
          - text: /Copyright © [\\^(19|20)]+\\d{2} Microsoft/
        `)
    })
})
