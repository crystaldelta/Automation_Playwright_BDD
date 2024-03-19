import {BeforeAll, Before, After, AfterAll, setDefaultTimeout} from "@cucumber/cucumber"
import {chromium, Browser, BrowserContext} from "@playwright/test"
import { fixture } from "./pageFixture"
import { Logger } from "winston"
setDefaultTimeout(60 * 1000 * 2)

let browser: Browser
let context: BrowserContext

BeforeAll (async function () {
    browser = await chromium.launch({headless: false})
});

Before (async function () {
    context = await browser.newContext();
    const page = await browser.newPage();
    fixture.page = page;
});

After (async function ({result}) {
    if (result?.status == 'FAILED') {
    const img = await fixture.page.screenshot({type : 'png'});
    await this.attach (img, "image/png");
}
    await fixture.page.close();
    await context.close();
});

AfterAll (async function () {
    await browser.close();
});