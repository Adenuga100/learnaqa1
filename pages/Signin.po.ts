import { Locator, Page } from "@playwright/test";

export class signInPage {
    
    static async fillEmailAs(page: Page, email: string) : Promise<void> {
            
        return await page.locator('[name="email"]').fill(email);
    }

    static async fillPasswordAs(page: Page, password: string) : Promise<void> {
            
        return await page.locator('[name="password"]').fill(password);
    }

    static async clickSignInButton(page: Page) : Promise<void> {
            
        return await page.getByRole('button', { name: 'Sign In' }).click();
    }

    static  getTittle(page: Page) : Locator {
                
        return  page.getByText('Practice Dashboard')
    }
}