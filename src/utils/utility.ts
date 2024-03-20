import {Locator, Page, expect,} from "@playwright/test"
import {page} from "../support/hooks"
//============================================================================================================================
export default class resuables {

    constructor(private page : Page) { }

    async goTo (url: string) {
        await page.goto (url, {waitUntil : "domcontentloaded"});
    };

    async click (locator: string) {
        const element = typeof locator === 'string' ? page.locator(locator) : locator;
        await element.waitFor({state : "visible"});
        await element.click();
    };

    async fill (locator: string, value: string) {
        const element = page.locator(locator);
        await element.waitFor({state : "visible"});
        await element.clear();
        await element.fill(value)
    };

    async hover (locator: string) {
        const element = page.locator(locator);
        await element.waitFor({state : "visible"});
        await element.hover();
    };

    async dropdown (locator: string, value: string) { // work only with <select>, <option> tag names
        const element = page.locator(locator);
        await element.waitFor({state : "visible"});
        await element.selectOption(value)
    };

    async scollUntil (locator: string) {
        const element = page.locator(locator);
        await element.waitFor({state : "visible"});
        await element.scrollIntoViewIfNeeded()
    };

    async getText (locator: string) { 
        const element = page.locator(locator);
        await element.waitFor({state : "visible"});
        await element.textContent();
    };

    async getAttribute (locator: string, attributeValue : string) { 
        const element = page.locator(locator);
        await element.waitFor({state : "visible"});
        await element.getAttribute(attributeValue);
    };

    //assertions
    async elementIsVisible (locator: Locator | string) {
        const element = typeof locator === 'string' ? page.locator(locator) : locator;
        await expect(element).toBeVisible();
    };

    async elementIsNotVisible (locator: Locator | string) {
        const element = typeof locator === 'string' ? page.locator(locator) : locator;
        await expect(element).toBeHidden();
    };

    async inputHasValue (locator: string, value: string) {
        const element = page.locator(locator);
        await expect(element).toHaveValue(value);
    };

    async pageHasUrl (expectedUrl: string) {
        await page.waitForURL(expectedUrl);
        const actualUrl = page.url();
        expect(actualUrl).toBe(expectedUrl);
    };
}