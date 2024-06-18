import { BeforeAll, Before, After, AfterAll, setDefaultTimeout, BeforeStep, AfterStep} from "@cucumber/cucumber"
import { chromium, Browser, BrowserContext, Page } from "@playwright/test"
import { logger } from "../support/logger"
const fs = require("fs-extra");
//==============================================================================================================================

setDefaultTimeout(60 * 1000 * 2)
let scenarioCount = 0;

let browser: Browser
let context: BrowserContext
let page: Page;

BeforeAll(async function () {
    browser = await chromium.launch({ headless: true })
    page = await browser.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });
    logger.info('Browser Launched successfully');
});

Before(async function (scenario) {
    scenarioCount++;
    context = await browser.newContext();
    console.log(`\n*********************** Scenario: ${scenarioCount} => ${scenario.pickle.name} ***********************\n`)
});
AfterStep(async function ({ result }) {
    if (result?.status == 'FAILED') {
        const img = await page.screenshot({ type: 'png' });
        this.attach(img, "image/png");
    }
});

// After(async function ({ result }) {
//     if (result?.status == 'FAILED') {
//         const img = await page.screenshot({ type: 'png' });
//         await this.attach(img, "image/png");
//     }
// });

AfterAll(async function () {
    await context.close();
    await browser.close();
});

export { page, browser }