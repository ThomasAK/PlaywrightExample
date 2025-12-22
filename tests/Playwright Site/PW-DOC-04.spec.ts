import {test, expect} from '@playwright/test';

import { PlaywrightPage } from "../../POM/Playwright Site/PlaywrightPage";
import {Footer} from "../../POM/Playwright Site/Footer";

test.describe('Playwright Footer CopyrightValidation', () => {
    let playwrightPage: PlaywrightPage
    let footer: Footer

    test.beforeEach(async ({page}) => {
        playwrightPage = new PlaywrightPage(page)
        footer = new Footer(page)
        await playwrightPage.goto()
    })

    test('Validate copyright text in Footer', async () => {
        await expect(footer.copyright).toMatchAriaSnapshot(`
          - text: /Copyright © [\\^(19|20)]+\\d{2} Microsoft/
        `)
    })
})
