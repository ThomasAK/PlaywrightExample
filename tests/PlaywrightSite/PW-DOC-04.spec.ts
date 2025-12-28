import {test, expect} from '@playwright/test';

import { PlaywrightPage } from "../../POM/PlaywrightSite/PlaywrightPage";
import {Footer} from "../../POM/PlaywrightSite/Footer";

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
          - text: /Copyright © [\\^(20)]+\\d{2} Microsoft/
        `)
    })
})
