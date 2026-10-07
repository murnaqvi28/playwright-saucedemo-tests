import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
});

test('add items to the cart and check the count', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await expect(inventoryPage.products).toHaveCount(6);

  await inventoryPage.addToCart('Sauce Labs Bike Light');
  await inventoryPage.addToCart('Sauce Labs Backpack');

  await expect(inventoryPage.cartBadge).toHaveText('2');
});

test('add and remove items from the cart and check the count', async ({ page }) => {

    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addToCart('Sauce Labs Backpack');


    await expect(inventoryPage.cartBadge).toHaveText('1');

    await inventoryPage.removeFromCart('Sauce Labs Backpack');


    await expect(inventoryPage.cartBadge).toBeHidden();

})

