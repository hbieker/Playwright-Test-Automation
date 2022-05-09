const {test, expect} = require('@playwright/test');

//Browser test fixture
//Globally available for every test annotation
//curly braces to recognize as a playwright fixture, not a normal string
//By default, tests run in headless mode
//npx playwright test --headed - command calls the playwright module, which triggers the playwright.config file
//or set headless : true/false in the playwright config file
//npx playwright test tests/test_name.js - command runs a specific test file

//test.only runs only this test in the file. Helpful if you are developing test scripts
test.only('test_case_1', async ({browser})=>
{
    //launch fresh instance with newContext method
    const context = await browser.newContext();
    const page = await context.newPage ();
    await page.goto("http://www.weather.gov");
    console.log(await page.title());
    //Assertions are built in unlike Selenium or Cypress, which require external test frameworks
    await expect(page).toHaveTitle("National Weather Service");
});

test('test_case_2', async ({browser, page})=>
{
    //Specify the page test fixture/parameter and the first two lines
    //below are not required. Use when no cookies are being passed
    //const context = await browser.newContext();
    //const page = await context.newPage ();
    await page.goto("http://www.yahoo.com");
});