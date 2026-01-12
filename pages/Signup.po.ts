import { Locator, Page } from "@playwright/test";

export class sigUpPage {
    static async fillFullNameAs(page: Page, fullName: string) : Promise<void> {
            
        return await page.locator('[name="full_name"]').fill(fullName);
    }

    // static async fillFullEmailAs(page: Page, email: string) : Promise<void> {
            
    //     return await page.locator('[name="email"]').fill(email);
    // }

    static async fillEmailAs(page: Page): Promise<string> {
        let email = `user_${crypto.randomUUID()}@testmail.com`;
        await page.locator('[name="email"]').fill(email);
        return email;
   }

    // static async fillPasswordAs(page: Page, password: string) : Promise<void> {
            
    //     return await page.locator('[name="password"]').fill(password);
    // }
    static async fillPasswordAs(page: Page) : Promise<void> {
        let password = `P@ss_${crypto.randomUUID()}`;
        return await page.locator('[name="password"]').fill(password);
    }
    
    static async clickSignUpButton(page: Page) : Promise<void> {
            
        return await page.getByRole('button', { name: 'Create Account' }).click();
    }

    static  getTittle(page: Page) : Locator {
            
        return  page.getByText('Practice Dashboard')
    }
}
