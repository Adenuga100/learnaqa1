// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';
import { signInPage } from '../pages/Signin.po';
import { HomePage } from '../pages/Home.po';
import { sigUpPage } from '../pages/Signup.po';

// import { test as setup } from '@playwright/test';

// let authFile = 'playwright/.auth/user.json';

// setup('Sign in', async ({ page }) => {
//   // Perform login steps
//   await page.goto('https://www.learnaqa.info/login/');
//   await HomePage.clickAcceptAllCookies(page);
//   await signInPage.fillEmailAs(page, 'adenugaadeyemiisaac@gmail.com');
//   await signInPage.fillPasswordAs(page, 'Hardayemmh4$');
//   await signInPage.clickSignInButton(page);

//   await page.waitForURL('https://www.learnaqa.info/dashboard/');

//   await page.context().storageState({ path: 'auth.json' });

//   // Save the storage state to the file
// //   await page.context().storageState({ path: authFile });
// });



async function globalSetup(config: FullConfig) {
  let browser = await chromium.launch();
  let page = await browser.newPage();

  await page.goto('https://www.learnaqa.info/login/');
  await HomePage.clickAcceptAllCookies(page);
  await signInPage.fillEmailAs(page, 'adenugaadeyemiisaac@gmail.com');
  await signInPage.fillPasswordAs(page, 'Hardayemmh4$');
  await signInPage.clickSignInButton(page);

 await page.waitForURL('**/dashboard/');

 //   await page.context().storageState({ path: 'auth.json' });

  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

let authFile = 'playwright/.auth/user.json'; // Where the login data is saved
async function globalSetupsignp(config: FullConfig) {
  let browser = await chromium.launch();
  let page = await browser.newPage();

  await page.goto('https://www.learnaqa.info/register/'); // Replace with your application's URL
  await HomePage.clickAcceptAllCookies(page);
  await HomePage.sigUp(page);
  await sigUpPage.fillFullNameAs(page, 'John Doe');
  await sigUpPage.fillEmailAs(page);
  await sigUpPage.fillPasswordAs(page);
  await sigUpPage.clickSignUpButton(page);

  await page.waitForURL('**/dashboard/');

 //   await page.context().storageState({ path: 'auth.json' });

 // await page.context().storageState({ path: 'storageState.json' });
 // Save the signed-in state
  await page.context().storageState({ path: authFile });
  await browser.close();
}

export default globalSetup;

