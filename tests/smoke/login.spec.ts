import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/auth/loginPage';
import { testUsers } from '../../data/testDataConfig';

test.describe('Login smoke tests', () => {
  test('login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://example.com/login');
    await loginPage.login(testUsers.validUser.email, testUsers.validUser.password);

    await expect(page).toHaveURL(/.*dashboard/);
  });

  test('login with invalid credentials shows an error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://example.com/login');
    await loginPage.login(testUsers.invalidUser.email, testUsers.invalidUser.password);

    await expect(page.locator('[data-test="login-error"]')).toBeVisible();
  });
});
