import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { error } from 'node:console';

test('valid user login kar sakta hai', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');
});

const invalidLogins = [
  { name: 'locked out user', username: 'locked_out_user', password: 'secret_sauce', error: 'locked out' },
  { name: 'wrong password', username: 'standard_user', password: 'wrong_pass', error: 'do not match' },
  { name: 'empty username', username: '', password: 'secret_sauce', error: 'Username is required' },
  { name: 'empty password', username: 'standard_user', password: '', error: 'Password is required'}
];

for (const data of invalidLogins) {
  test(`login fails: ${data.name}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(data.username, data.password);

    await expect(loginPage.errorMessage).toContainText(data.error);
  });
}
;