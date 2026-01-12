import { Page } from "@playwright/test";

export class HomePage {

   static async clickAcceptAllCookies(page: Page) : Promise<void> {
        
      return await page.getByRole('button', { name: 'Accept All' }).click();
   }

   static async clickDashboard(page: Page) : Promise<void> {
        
      return await page.getByRole('button', { name: 'Go to Dashboard' }).click();
   }

   static async sigUp(page: Page) : Promise<void> {
        
      return await page.getByRole('button', { name: 'Sign Up' }).nth(1).click();
   }

   static async sigIn(page: Page) : Promise<void> {
        
      return await page.getByRole('button', { name: 'Sign In' }).nth(1).click();
   }


}