import { Locator, Page } from '@playwright/test';
import testUsers from '../../data/testUsers.json';

export class LoginPage  {
  public readonly emailInput:Locator;
  public readonly passwordInput:Locator;
  public readonly loginButton:Locator;
  public readonly personalStatusButton:Locator;
    loginPage1: any;
    
  constructor(private page: Page) {
   this.emailInput = this.page.getByRole('textbox', { name: 'Użytkownik' })
   this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
   this.loginButton = this.page.getByRole('button', { name: 'Zaloguj' });
   this.personalStatusButton = this.page.getByTestId('personal-status-button');
  }

  async open(): Promise<LoginPage> {
    const newPage = await this.page.context().newPage();
    
    await newPage.goto('https://webagent-uat-wa.alfavox.dev/ui/alfaworkspace');
    return new LoginPage(newPage);
  }


  async login1(user = testUsers.Agent1): Promise<void> {
    await this.emailInput.fill(user.username);
    await this.passwordInput.fill(user.password);
    await this.loginButton.click();
  }

  async login2(user = testUsers.Agent2): Promise<void> {
    await this.emailInput.fill(user.username);
    await this.passwordInput.fill(user.password);
    await this.loginButton.click();
  }

}
