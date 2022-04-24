const {test} = require('@playwright/test');

//Browser test fixture
//Globally available for every test annotation
//curly braces to recognize as a playwright fixture, not a normal string
test('test_case_name', async ({browser})=>
{
    //launch fresh instance with newContext method
    const context = await browser.newContext();
    const page = await context.newPage ();
    await page.goto("http://www.weather.gov");
});

test('test_case_name', async ({browser, page})=>
{
    //Specify the page test fixture/parameter and the first two lines
    //below are not required. Use when no cookies are being passed
    //const context = await browser.newContext();
    //const page = await context.newPage ();
    await page.goto("http://www.weather.gov");
});