import {test,expect} from "@playwright/test";

test('My first test', async({page})=>{
    await page.goto("https://www.ministryoftesting.com/articles/websites-to-practice-testing");
    await expect(page.locator(".btn-sign-in")).toBeVisible();
})