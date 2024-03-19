import {BeforeAll, Before, After, AfterAll, setDefaultTimeout} from "@cucumber/cucumber"
import {chromium, Browser, BrowserContext} from "@playwright/test"
import { pageFixture } from "./pageFixture"
setDefaultTimeout(60 * 1000 * 2)

let browser: Browser
let context: BrowserContext

BeforeAll (async function () {
    browser = await chromium.launch({headless: false})
});

Before (async function () {
    context = await browser.newContext();
    const page = await browser.newPage();
    pageFixture.page = page;
});

After (async function ({pickle, result}) {
    if (result?.status == 'FAILED') {
    const img = await pageFixture.page.screenshot({path : `./failure-screenshots/ ${pickle.name}`, type : 'png'});
    await this.attach (img, "image/png");
}
    await pageFixture.page.close();
    await context.close();
});

AfterAll (async function () {
    await browser.close();
});