import { test, expect } from '../../fixtures/tests';
import { LoginPage } from '../../pages/auth/loginPage';


test('user can login', async ({ page, Agent1, Agent2 }) => {
    // preparation
    const loginPage1 = new LoginPage(page);
    const loginPage2 = new LoginPage(page);
    const page1 = await loginPage1.open();
    const page2 = await loginPage2.open();

    //action
    await page1.loginPage1(Agent1);
    //verification
    await expect(page1.personalStatusButton)
    .toBeVisible({ timeout: 30_000 });

    await page2.login2(Agent2);
     await expect(page2.personalStatusButton)
        .toBeVisible({ timeout: 30_000 });
});

