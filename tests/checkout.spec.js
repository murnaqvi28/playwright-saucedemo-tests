import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
});

test('user can reach checkout with an item in the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addToCart('Sauce Labs Backpack');
    await inventoryPage.openCart();
    await expect(cartPage.cartItems).toHaveCount(1);
    await cartPage.checkout();
    await expect(page).toHaveURL(/checkout-step-one/);

})
test('user can complete an order', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await inventoryPage.addToCart('Sauce Labs Backpack');
  await inventoryPage.openCart();
  await cartPage.checkout();
  await checkoutPage.fillDetails('Ali', 'Khan', '44000');
  await expect(page).toHaveURL(/checkout-step-two/);
  await checkoutPage.finish();
  await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
});
;