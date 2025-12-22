import {test, expect} from '@playwright/test';
import {ProtectedPage} from "../../POM/LoginSite/ProtectedPage";

test.describe('Auth Login Test.', () => {
    let protectedPage: ProtectedPage
    test.use({ storageState: 'playwright/.auth/user.json' });
    test.beforeEach(async ({page}) => {
        protectedPage = new ProtectedPage(page)
    })

    test('Validate you can access protected page', async () => {
        await protectedPage.goto()
        await expect(protectedPage.page.getByText('Hello, testuser!')).toBeVisible()
    })
})
