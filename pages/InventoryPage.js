export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.products = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addToCart(productName) {
    await this.products
      .filter({ hasText: productName })
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }

  async removeFromCart(productName){
    await this.products
      .filter({ hasText: productName })
      .getByRole('button', { name: 'Remove' })
      .click();
  }
}