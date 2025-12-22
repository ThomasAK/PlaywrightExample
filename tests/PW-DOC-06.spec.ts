import {test, expect} from '@playwright/test';

import {ReleaseNotes} from "../POM/DOCS/releaseNotes";
import {SideBar} from "../POM/DOCS/sideBar";

test.describe('Verify Getting Started drop down on release notes can be collapsed', () => {
    let releaseNotes: ReleaseNotes
    let sideBar: SideBar

    test.beforeEach(async ({page}) => {
        releaseNotes = new ReleaseNotes(page);
        sideBar = new SideBar(page);
        await releaseNotes.goto()
    })

    test('Validate Getting Stated will collapse', async () => {
        if(!sideBar.gettingStartedDropdown.getAttribute('aria-expanded')) await sideBar.gettingStartedDropdown.click()
        await sideBar.gettingStartedDropdown.click()
        await expect(sideBar.gettingStartedDropdown).toHaveAttribute('aria-expanded', 'false');
    })
})