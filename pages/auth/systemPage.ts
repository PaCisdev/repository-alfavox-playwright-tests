import { Locator, Page } from '@playwright/test';

export class SystemPage  {
  login2(Agent2: { username: string; password: string; }) {
      throw new Error('Method not implemented.');
  }
  loginPage1(Agent1: { username: string; password: string; }) {
      throw new Error('Method not implemented.');
  }
  public readonly availableButton:Locator;
  public readonly toggle:Locator;
  public readonly accept:Locator;
  public readonly dialButton:Locator;

  public readonly moreOptionsButton:Locator;
    public readonly logoutButton:Locator;
    public readonly logoutConfirmButton:Locator;

  
  constructor(private page: Page) {
   this.availableButton = this.page.getByRole('listitem').filter({ hasText: 'Dostępny' });
   this.toggle = this.page.getByTestId('channel-toggle-0-button');
   this.accept = this.page.getByTestId('channel-selection-accept-button');
   this.dialButton = this.page.getByTestId('dialform-dialog-button');

   this.moreOptionsButton = this.page.getByTestId('more-options-button');
   this.logoutButton = this.page.getByTestId('logout-button');
   this.logoutConfirmButton = this.page.getByTestId('logout-confirm-button');
  }
  async open(): Promise<SystemPage> {
    const newPage = await this.page.context().newPage();
    
    await newPage.goto('https://webagent-uat-wa.alfavox.dev/ui/alfaworkspace');
    return new SystemPage(newPage);
  }

  async availableAction(): Promise<void> {
    await this.availableButton.click();
  }

  async toggleAction(): Promise<void> {
    await this.toggle.click();
  }

  async acceptAction(): Promise<void> {
    await this.accept.click();
  }

  async dialButtonAction(): Promise<void> {
    await this.dialButton.click();

    await this.page
    .locator('[data-testid="dialform-iframe"]')
    .contentFrame()
    .getByRole('combobox')
    .click();

    await this.page
    .locator('[data-testid="dialform-iframe"]')
    .contentFrame()
    .getByText('Kampania_Rekrutacja_2')
    .click();

    await this.page
    .locator('[data-testid="dialform-iframe"]')
    .contentFrame()
    .getByRole('gridcell', { name: '70' })
    .dblclick();
  }

  async logoutAction(page1: any, page2: any): Promise<void> {
    await this.moreOptionsButton.click();
    await this.logoutButton.click();
    await this.logoutConfirmButton.click();
}
}