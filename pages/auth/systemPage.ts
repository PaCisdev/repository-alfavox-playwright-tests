import { Locator, Page } from '@playwright/test';

export class SystemPage  {
  public readonly availableButton:Locator;
  public readonly toggle:Locator;
  public readonly accept:Locator;
  public readonly dialogButton:Locator;
  
  
  constructor(private page: Page) {
   this.availableButton = this.page.getByRole('listitem').filter({ hasText: 'Dostępny' });
   this.toggle = this.page.getByTestId('channel-toggle-0-button');
   this.accept = this.page.getByTestId('channel-selection-accept-button');
   this.dialogButton = this.page.getByTestId('dialform-dialog-button');
  }

    async availableAction(): Promise<void> {
    await this.availableButton.click();
  }

    async toggleAction(): Promise<void>{    
        await this.toggle.click();
    }

    async acceptAction(): Promise<void>{
    }

    async dialogButtonAction(): Promise<void>{
        await this.dialogButton.click();
    }