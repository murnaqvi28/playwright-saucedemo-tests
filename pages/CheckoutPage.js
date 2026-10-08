export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.zipInput = page.getByPlaceholder('Zip/Postal Code');
    this.continueButton = page.getByRole('button', {name : 'Continue'});
    this.finishButton = page.getByRole('button', {name: 'Finish'});
    this.completeHeader = page.locator('.complete-header');
  }

  async fillDetails(firstName, lastName, zip) {
    // teeno fields bharein, phir Continue dabayein
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipInput.fill(zip);
    await this.continueButton.click();
  }

  async finish() {
    await this.finishButton.click();
  }
}