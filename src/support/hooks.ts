import {BeforeAll, Before, After, AfterAll, setDefaultTimeout} from "@cucumber/cucumber"
import {chromium, Browser, BrowserContext, Page} from "@playwright/test"

setDefaultTimeout(60 * 1000 * 2)

let browser: Browser
let context: BrowserContext
let page: Page;

BeforeAll (async function () {
    browser = await chromium.launch({headless: false})
    page = await browser.newPage();
});

Before (async function () {
    context = await browser.newContext();
});

After (async function ({result}) {
    if (result?.status == 'FAILED') {
    const img = await page.screenshot({type : 'png'});
    await this.attach (img, "image/png");
}
    await page.close();
    await context.close();
});

AfterAll (async function () {
    await browser.close();
});

export {page, browser}