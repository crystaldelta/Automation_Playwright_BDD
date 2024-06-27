import { BeforeAll, Before, After, AfterAll, setDefaultTimeout } from "@cucumber/cucumber"
import { chromium, Browser, BrowserContext, Page } from "@playwright/test"
import { logger } from "../support/logger"
const fs = require("fs-extra");

setDefaultTimeout(60 * 1000 * 2);
let scenarioCount = 0;

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async function () {
    browser = await chromium.launch({ headless: true });
    page = await browser.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });
    logger.info('Browser Launched successfully');
});

Before(async function (scenario: { pickle: { name: string } }) {
    scenarioCount++;
    context = await browser.newContext();
    console.log(`\n=========== Scenario: ${scenarioCount} => ${scenario.pickle.name} ===========\n`);
});

// It will trigger for not auth scenarios
Before({ tags: "not @auth" }, async function ({ pickle }: { pickle: { name: string, id: string } }) {
    const scenarioName = pickle.name + pickle.id;
    context = await browser.newContext({
        recordVideo: {
            dir: "test-results/videos",
        },
    });
    await context.tracing.start({
        name: scenarioName,
        title: pickle.name,
        sources: true,
        screenshots: true,
        snapshots: true
    });
    page = await context.newPage();
});

After(async function ({ pickle, result }) {
    let videoPath: string | null = null;
    let img: Buffer | null = null;
    const path = `./test-results/trace/${pickle.id}.zip`;
    if (result?.status == 'FAILED') {
        img = await page.screenshot(
            { path: `./test-results/screenshots/${pickle.name}.png`, type: "png" })
        // Get the video path if video recording is enabled
        const video = page.video();
            if (video) {
                videoPath = await video.path();
            }    
    }
    // Stop tracing and save the trace file
    await context.tracing.stop({ path: path });
    await page.close();
    await context.close();
    if (result?.status === 'FAILED') {
        if (img) {
            await this.attach(img, "image/png");
        }
        if (videoPath) {
            await this.attach(fs.readFileSync(videoPath), 'video/webm');
        }
        const traceFileLink = `<a href="https://trace.playwright.dev/?trace=${encodeURIComponent(path)}">Open ${path}</a>`;
        await this.attach(`Trace file: ${traceFileLink}`, 'text/html');
    }

});

AfterAll(async function () {
    await context.close();
    await browser.close();
});

export { page, browser };
