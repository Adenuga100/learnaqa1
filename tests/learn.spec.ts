import test, {chromium, expect} from "@playwright/test";
import { sigUpPage } from "../pages/Signup.po";
import { HomePage } from "../pages/Home.po";
 import { signInPage } from "../pages/Signin.po";
import { DashboardPage } from "../pages/Dashboard.po";
import { DynamicElementPage } from "../pages/DynamicElement.po";




// test('Sign Up functionality', async ({ browser }) => {
//     // test.use({ storageState: { cookies: [], origins: [] } });
//       const context = await browser.newContext(); // ❌ no storageState
//    const page = await context.newPage();
//  //   test.use({ storageState: undefined });
//     await page.goto('https://www.learnaqa.info'); // Replace with your application's URL
//     await HomePage.clickAcceptAllCookies(page);
//     await HomePage.sigUp(page);
//     await sigUpPage.fillFullNameAs(page, 'John Doe');
//     await sigUpPage.fillEmailAs(page);
//     await sigUpPage.fillPasswordAs(page);
//     await sigUpPage.clickSignUpButton(page);
//     await expect(sigUpPage.getTittle(page)).toBeVisible();
// });

test.describe('Unauthenticated tests', () => {
//  test.use({ storageState: 'cookies.json' });
test.use({ storageState: { cookies: [], origins: [] } });

 test('Sign Up functionality', async ({ page }) => {
    // test.use({ storageState: { cookies: [], origins: [] } });
    //   const context = await browser.newContext(); // ❌ no storageState
//    const page = await context.newPage();
 //   test.use({ storageState: undefined });
    await page.goto('/'); // Replace with your application's URL
    await HomePage.clickAcceptAllCookies(page);
    await HomePage.sigUp(page);
    await sigUpPage.fillFullNameAs(page, 'John Doe');
    await sigUpPage.fillEmailAs(page);
    await sigUpPage.fillPasswordAs(page);
    await sigUpPage.clickSignUpButton(page);
    await expect(sigUpPage.getTittle(page)).toBeVisible();
});

test('Sign In functionality', async ({ page }) => {
  await page.goto('/'); // Replace with your application's URL
  await HomePage.clickAcceptAllCookies(page);
  await HomePage.sigIn(page);
  await signInPage.fillEmailAs(page, 'adenugaadeyemiisaac@gmail.com');
  await signInPage.fillPasswordAs(page, 'Hardayemmh4$');
  await signInPage.clickSignInButton(page);
  await expect(signInPage.getTittle(page)).toBeVisible();
  });
});


test('Sign In functionality', async ({ page }) => {
    await page.goto(''); // Replace with your application's URL
    await expect(signInPage.getTittle(page)).toBeVisible();
});



test('Drag and Drop functionality on the Dashboard page', async ({ page }) => {
    
    await page.goto('');
    await HomePage.clickDashboard(page);
    await DashboardPage.clickStartPracticeByIndex(page, 0);
    await DashboardPage.dragAndDrop(page);
    await expect(DashboardPage.getTittle(page)).toBeVisible();
});

test('Drag and Drop functionality on the slide menus', async ({ page }) => {
    await page.goto('');
    await HomePage.clickDashboard(page);
    await DashboardPage.clickSideMenuByNameAs(page, 'Drag and Drop');
    // await DashboardPage.clickStartPracticesAs(page, 0);
    await DashboardPage.dragAndDrop(page);
    await expect(DashboardPage.getTittle(page)).toBeVisible();
});

test('Dynamic Elements functionality click delayed element on Dashboard', async ({ page }) => {
    await page.goto('');
    await HomePage.clickDashboard(page);
    await DashboardPage.clickStartPracticeByIndex(page, 1);
    await DynamicElementPage.clickDelayedElement(page);
    await expect(DynamicElementPage.getTittle(page)).toBeVisible({timeout: 10000});
});

test('Dynamic Elements functionality click delayed element on slide menus', async ({ page }) => {
    await page.goto('');
    await HomePage.clickDashboard(page);
    // await DashboardPage.clickStartPracticesAs(page, 1);
    await DashboardPage.clickSideMenuByNameAs(page, 'Dynamic Elements');
    await DynamicElementPage.clickDelayedElement(page);
    await expect(DynamicElementPage.getTittle(page)).toBeVisible({timeout: 10000});
});

test('Dynamic Elements functionality click ajax data loading element on dashboard', async ({ page }) => {
    await page.goto('');
    await HomePage.clickDashboard(page);
    await DashboardPage.clickStartPracticeByIndex(page, 1);
    // await DashboardPage.clickSideMenuByNameAs(page, 'Dynamic Elements');
    await DynamicElementPage.clickAjaxDataLoading(page);
    await DynamicElementPage.scrolldownonAjaxDataLoading(page);
    await expect(DynamicElementPage.getAjaxDataLoadingTittle(page)).toBeVisible({timeout: 10000});
});

test('Dynamic Elements functionality click ajax data loading element on slide menus', async ({ page }) => {
    await page.goto('');
    await HomePage.clickDashboard(page);
    //await DashboardPage.clickStartPracticesAs(page, 1);
    await DashboardPage.clickSideMenuByNameAs(page, 'Dynamic Elements');
    await DynamicElementPage.clickAjaxDataLoading(page);
    await DynamicElementPage.scrolldownonAjaxDataLoading(page);
    await expect(DynamicElementPage.getAjaxDataLoadingTittle(page)).toBeVisible({timeout: 10000});
});


test('Dynamic Elements functionality click Lizy loading on dashboard', async ({ page }) => {
    await page.goto('');
    await HomePage.clickDashboard(page);
    await DashboardPage.clickStartPracticeByIndex(page, 1);
    // await DashboardPage.clickSideMenuByNameAs(page, 'Dynamic Elements');
    await DynamicElementPage.scrolldownLazyLoading(page);
    await DynamicElementPage.scrollDownImagesLoading(page);
    await expect(DynamicElementPage.getImagesLoadingTittle(page)).toBeVisible({timeout: 10000});
 
});

test('Dynamic Elements functionality click Lizy loading on slide menus', async ({ page }) => {
    await page.goto('');
    await HomePage.clickDashboard(page);
    // await DashboardPage.clickStartPracticeByIndex(page, 1);
    await DashboardPage.clickSideMenuByNameAs(page, 'Dynamic Elements');
    await DynamicElementPage.scrolldownLazyLoading(page);
    await DynamicElementPage.scrollDownImagesLoading(page);
    await expect(DynamicElementPage.getImagesLoadingTittle(page)).toBeVisible({timeout: 10000});
 
});

test('Dynamic Elements functionality click Infinite scroll on slide menus', async ({ page }) => {
    await page.goto('');
    await HomePage.clickDashboard(page);
    // await DashboardPage.clickStartPracticeByIndex(page, 1);
    await DashboardPage.clickSideMenuByNameAs(page, 'Dynamic Elements');
    await DynamicElementPage.scrollInfinite(page);
    // await DynamicElementPage.scrollInfiniteItems(page);
    await DynamicElementPage.scrollUntilTargetLoaded(page);
    await expect(DynamicElementPage.getNoMoreItemsTittle(page)).toBeVisible({timeout: 10000});
 
});

test('Dynamic Elements functionality click Infinite scroll on dashboard', async ({ page }) => {
    await page.goto('');
    await HomePage.clickDashboard(page);
    await DashboardPage.clickStartPracticeByIndex(page, 1);
    // await DashboardPage.clickSideMenuByNameAs(page, 'Dynamic Elements');
    await DynamicElementPage.scrollInfinite(page);
    // await DynamicElementPage.scrollInfiniteItems(page);
    await DynamicElementPage.scrollUntilTargetLoaded(page);
    await expect(DynamicElementPage.getNoMoreItemsTittle(page)).toBeVisible({timeout: 10000});
 
});









