const {test, expect} = require('@playwright/test');

test('test_case_1', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage ();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle("National Weather Service");
    //Supports css and xpath locators, but css is preferred
    //Use the Selectorshub chrome extension or Chropath
    //If ID is present - css -> tagname#id or #id
    //If class attribute is present - css -> tagname.class or .class
    //css based on any attribute - css -> [attribute='value']
    await page.locator(#username).type("test_user")
    await page.locator([type='password']).type("testing")
});
