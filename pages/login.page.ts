import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInputField: Locator;
  readonly passwordInputField: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInputField = page.locator('[data-test="username"]');
    this.passwordInputField = page.locator('[data-test="password"]');
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  public async gotoLoginPage(URL: string) {
    await this.page.goto(URL);
    await expect(this.page).toHaveURL(URL);
  }

  public async login(username: string, password: string, loggedInUrl: string) {
    await this.usernameInputField.fill(username);
    await this.passwordInputField.fill(password);
    await this.loginButton.click();

    await expect(this.page).toHaveURL(loggedInUrl);
  }
}
