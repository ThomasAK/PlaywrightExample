import {test, expect} from '@playwright/test';

import {ReleaseNotes} from "../../POM/PlaywrightSite/DOCS/ReleaseNotes";
import {SideBar} from "../../POM/PlaywrightSite/DOCS/SideBar";

test.describe('Verify Getting Started drop down on release notes can be collapsed', () => {
    let releaseNotes: ReleaseNotes
    let sideBar: SideBar

    test.beforeEach(async ({page}) => {
        releaseNotes = new ReleaseNotes(page);
        sideBar = new SideBar(page);
        await releaseNotes.goto()
    })

    test('Validate Getting Stated will collapse', async () => {
        if(!await sideBar.gettingStartedDropdown.getAttribute('aria-expanded')) await sideBar.gettingStartedDropdown.click()
        await sideBar.gettingStartedDropdown.click()
        await expect(sideBar.gettingStartedDropdown).toHaveAttribute('aria-expanded', 'false');
    })
})