import { BeforeAll, AfterAll } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect} from "@playwright/test";

let browser: Browser;
let page: Page;

BeforeAll(async function () {
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
})

AfterAll(async function () {
    await browser.close();
})

export {page, browser}