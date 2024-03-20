import {BeforeAll, Before, After, AfterAll, setDefaultTimeout} from "@cucumber/cucumber"
import {chromium, Browser, BrowserContext, Page} from "@playwright/test"
import {logger} from "../support/logger"
//==============================================================================================================================

setDefaultTimeout(60 * 1000 * 2)
let scenarioCount = 0;

let browser: Browser
let context: BrowserContext
let page: Page;

BeforeAll (async function () {
    browser = await chromium.launch({headless: false})
    page = await browser.newPage();
    await page.setViewportSize( { width: 1920, height: 1080 } );
    logger.info('Browser Launched successfully');
});

Before (async function (scenario) {
    scenarioCount ++;
    context = await browser.newContext();
    console.log(`================ Scenario: ${scenarioCount} => ${scenario.pickle.name} ================`)
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