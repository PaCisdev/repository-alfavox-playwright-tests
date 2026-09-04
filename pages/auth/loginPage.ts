import { Locator, Page } from '@playwright/test';
import testUsers from '../../data/testUsers.json';

export class LoginPage  {
  public readonly emailInput:Locator;
  public readonly passwordInput:Locator;
  public readonly loginButton:Locator;
  public readonly errorMessage:Locator;

  constructor(private page: Page) {
   this.emailInput = this.page.getByRole('textbox', { name: 'Użytkownik' })
   this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
   this.loginButton = this.page.getByRole('button', { name: 'Zaloguj' });
   this.errorMessage = this.page.getByRole('alert');
  }

  async open(): Promise<void> {
    await this.page.goto('https://webagent-uat-wa.alfavox.dev/ui/alfaworkspace');
  }

  async login(user = testUsers.login1): Promise<void> {
    await this.emailInput.fill(user.username);
    await this.passwordInput.fill(user.password);
    await this.loginButton.click();
  }

  async getErrorMessage(): Promise<string> {
    return this.errorMessage.innerText();
  }
}
