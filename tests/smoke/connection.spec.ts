import { test, expect } from '../../fixtures/tests';
import { LoginPage } from '../../pages/auth/loginPage';
import { SystemPage } from '../../pages/auth/systemPage';


test('users can connect', async ({ page, Agent1, Agent2,  }) => {
    // preparation
    const loginPage1 = new SystemPage(page);
    const loginPage2 = new SystemPage(page);
    const page1 = await loginPage1.open();
    const page2 = await loginPage2.open();

    //action
    await page1.loginPage1(Agent1);
    await page2.loginPage1(Agent2);

    await page1.availableAction();
    
    await page1.toggleAction();
    await page2.toggleAction();
    await page1.acceptAction();
    
await page2.availableAction();
await page2.toggleAction();
await page2.acceptAction();

    await page1.dialButtonAction();
    

    // verification

});