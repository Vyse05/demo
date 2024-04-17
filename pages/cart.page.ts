import { Locator, Page, expect } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.getByRole("link", { name: "CHECKOUT" });
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.getByRole("button", { name: "CONTINUE" });
    this.finishButton = page.getByRole("link", { name: "FINISH" });
  }

  public async checkoutCart(URL: string) {
    await this.checkoutButton.click();
    await expect(this.page).toHaveURL(URL);
  }

  public async fillInformationForm(
    firstname: string,
    lastName: string,
    postalCode: string,
    URL: string
  ) {
    await this.firstNameInput.fill(firstname);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
    await expect(this.page).toHaveURL(URL);
  }

  public async confirmPurchase(URL: string) {
    await this.finishButton.click();
    await expect(this.page).toHaveURL(URL);
  }
}
