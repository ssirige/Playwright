const { chromium } = require('playwright');

let browser;
let context;

beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
});

afterAll(async () => {
    await context.close();
    await browser.close();
});

module.exports = { context };