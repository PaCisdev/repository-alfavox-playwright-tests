import { test, expect } from '../../fixtures/tests';
import { LoginPage } from '../../pages/auth/loginPage';


test('user can login', async ({ page, Agent1, Agent2 }) => {
    // preparation
    const loginPage1 = new LoginPage(page);
    const loginPage2 = new LoginPage(page);

    await loginPage1.open();
    await loginPage2.open();
    // action
    await loginPage1.login1(Agent1);

    // verification
    await expect(page.getByTestId('personal-status-button'))
        .toBeVisible({ timeout: 30_000 });

    await loginPage2.login2(Agent1);

    // verification
    await expect(page.getByTestId('personal-status-button'))
        .toBeVisible({ timeout: 30_000 });

    });


