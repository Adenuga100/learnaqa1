import { Locator, Page } from "@playwright/test";

export class DashboardPage {

    static async clickStartPracticeByIndex(page: Page, index: number): Promise<void> {
        let clickStartPracticesBtn = page.getByText('Start Practice').nth(index); // Replace with actual selector
        // let clickStartPracticesBtn = labelpractices.locator('[class="btn focus-visible btn-outline btn-md w-full"]'); // Replace with actual selector
       return await clickStartPracticesBtn.click();
    }

    static async clickSideMenuByNameAs(page: Page, text: string): Promise<void> {
        let clickStartPracticesBtn = page.locator('[class="flex-1"]').filter({ hasText: text }); // Replace with actual selector
        // let clickStartPracticesBtn = labelpractices.locator('[class="btn focus-visible btn-outline btn-md w-full"]'); // Replace with actual selector
       return await clickStartPracticesBtn.click();
    }

    static async dragAndDrop(page: Page): Promise<void> {
        let source = page.locator('[class="space-y-3 min-h-[200px]"] [id*="item"]'); // Replace with actual selector
        let target = page.locator('[id="drop-zone"]'); // Replace with actual selector
        //  let count = await source.count();
        // for (let i = 0; i < 4; i++) {
        //    await source.nth(i).dragTo(target);
        // }
        while (await source.count() > 0) {
           await source.first().dragTo(target);
        }
        
    }

    static  getTittle(page: Page) : Locator {
                    
        return  page.getByText('Learn to test drag and drop interactions')
    }

}
