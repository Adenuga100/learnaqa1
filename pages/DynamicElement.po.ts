import { Locator, Page } from "@playwright/test";

export class DynamicElementPage {

    static async clickDelayedElement(page: Page): Promise<void> {
        let delayElementBtn = page.getByText('Click to Show Delayed Element'); 
       return await delayElementBtn.click();
    }

    static async clickHiddenElements(page: Page): Promise<void> {
        // let scrollhiddendynamic  = page.getByText('Hidden & Dynamic Elements'); 
        // await scrollhiddendynamic.scrollIntoViewIfNeeded();

        let clickhiddendynamic  = page.getByRole('button', { name: 'Reveal Hidden Elements' }); 
        await clickhiddendynamic.scrollIntoViewIfNeeded();
       return await clickhiddendynamic.click();
    }

    static async clickDynamicContentGeneration(page: Page): Promise<void> {
        // let scrollhiddendynamic  = page.getByText('Hidden & Dynamic Elements'); 
        // await scrollhiddendynamic.scrollIntoViewIfNeeded();

        let clickgeneratedynamic  = page.getByRole('button', { name: 'Generate Dynamic Content' }); 
        await clickgeneratedynamic.scrollIntoViewIfNeeded();
       return await clickgeneratedynamic.click();
    }

    static  getTittle(page: Page): Locator {
        // let delayElementBtn = page.getByText('Click to Show Delayed Element'); 
        // await delayElementBtn.click();
        return page.locator('[id="delayed-element"]');
    }

    static async clickAjaxDataLoading(page: Page): Promise<void> {
        let ajaxDataLoadingBtn = page.getByText('Load AJAX Data'); 
       return await ajaxDataLoadingBtn.click();
    }

    static async scrolldownLazyLoading(page: Page): Promise<void> {
      let lazyloading = page.getByText('Lazy Loading Images');
    
        return await lazyloading.scrollIntoViewIfNeeded();
        
    }

    static async scrollInfinite(page: Page): Promise<void> {
      let scrollInfinite = page.getByText('Loaded');
       return await scrollInfinite.scrollIntoViewIfNeeded();
       await page.waitForTimeout(2000);


    }

    // static async scrollInfiniteItems(page: Page): Promise<void> {
    //   let scrollInfiniteItems = ('[class*="white rounded border"]');
    //    let count = await page.locator(scrollInfiniteItems).count();
      
    //    while(await page.locator(scrollInfiniteItems).count() < 0) {
        
    //         await page.locator(scrollInfiniteItems).last().scrollIntoViewIfNeeded({timeout: 10000});
    //         await page.waitForTimeout(2000);
    //     }
        
    // }

    static async scrollUntilTargetLoaded(page: Page): Promise<void> {
        let itemSelector = '[class*="white rounded border"]';
    
        let currentCount = await page.locator(itemSelector).count();

        while (true) {
           // 1. Find the last item currently available
           let lastItem = page.locator(itemSelector).last();
        
            // 2. Scroll it into view to trigger the 'Load More' event
            await lastItem.scrollIntoViewIfNeeded();

          // 3. Wait for the network or DOM to update
            // Using a small timeout or waiting for a specific network response is best
          await page.waitForTimeout(2000); 

          // 4. Re-count the items
           let newCount = await page.locator(itemSelector).count();

           // 5. Exit if no new items are appearing (reached the end of the site)
            if (newCount === currentCount) {
               break;
            }

         currentCount = newCount;
        }
    }

    static async scrollDownImagesLoading(page: Page): Promise<void> {
      let lazyloading = page.locator('[class*="scroll-item p-3 bg-white rounded border"]');
      let count = await lazyloading.count();

        
        for (let i = 0; i < count; i++) {
            await lazyloading.nth(i).scrollIntoViewIfNeeded({timeout: 10000});
            await page.waitForTimeout(1000);
        }
        
    }

    static async scrolldownonAjaxDataLoading(page: Page): Promise<void> {
        
        let container = page.getByText('Dynamic Item 5');

        return await container.scrollIntoViewIfNeeded();
    //    return await container.evaluate(el => {
    //     el.scrollTop = el.scrollHeight;
    //     });

    }

    static  getAjaxDataLoadingTittle(page: Page): Locator {
        // let delayElementBtn = page.getByText('Click to Show Delayed Element'); 
        // await delayElementBtn.click();
        return page.getByText('Dynamic Item 5');
    }

    static   getImagesLoadingTittle(page: Page): Locator {
        // let delayElementBtn = page.getByText('Click to Show Delayed Element'); 
        // await delayElementBtn.click();
        let lazyloading = page.locator('[class*="lazy-image-placeholder"]').nth(9);
        
        return lazyloading;
    }

    static   getNoMoreItemsTittle(page: Page): Locator {
        // let delayElementBtn = page.getByText('Click to Show Delayed Element'); 
        // await delayElementBtn.click();
        return  page.getByText('No more items to load');
        
    }

    static   getHiddenElementTittle(page: Page): Locator {
        // let delayElementBtn = page.getByText('Click to Show Delayed Element'); 
        // await delayElementBtn.click();
        return  page.getByText('Hidden element revealed!');
        
    }

    static   getDynamicElementTittle(page: Page): Locator {
        // let delayElementBtn = page.getByText('Click to Show Delayed Element'); 
        // await delayElementBtn.click();
        return  page.locator('[id="dynamic-content"]');
        
    }

}