import {BeforeAll, Before, After, AfterAll, setDefaultTimeout} from "@cucumber/cucumber"
import {chromium, Browser, BrowserContext} from "@playwright/test"
import { fixture } from "./pageFixture"
setDefaultTimeout(60 * 1000 * 2)

let browser: Browser
let context: BrowserContext

BeforeAll (async function () {
    browser = await chromium.launch({headless: false, args:['--window-size = 1920,1040']})
    console.log ('Browser Launched');
});

Before (async function () {
    context = await browser.newContext();
    const page = await browser.newPage();
    fixture.page = page;
});

After (async function ({pickle, result}) {
    if (result?.status == 'FAILED') {
    const img = await fixture.page.screenshot({path : `./failure-screenshots/ ${pickle.name}`, type : 'png'});
    await this.attach (img, "image/png");
}
    await fixture.page.close();
    await context.close();
});

AfterAll (async function () {
    await browser.close();
});