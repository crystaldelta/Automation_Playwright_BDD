import {Page, expect} from "@playwright/test"
import {fixture} from "../support/pageFixture"

export default class resuables {

    constructor(private page : Page) { }

    async goTo (url: string) {
        await fixture.page.goto (url, {waitUntil : "domcontentloaded"});
    };

    async click (locator: string) {
        const element = fixture.page.locator(locator);
        await element.waitFor({state : "visible"});
        await element.click();
    };

    async fill (locator: string, value: string) {
        const element = fixture.page.locator(locator);
        await element.waitFor({state : "visible"});
        await element.clear();
        await element.fill(value)
    };

    async hover (locator: string) {
        const element = fixture.page.locator(locator);
        await element.waitFor({state : "visible"});
        await element.hover();
    };

    async dropdown (locator: string, value: string) { // work only with <select>, <option> tag names
        const element = fixture.page.locator(locator);
        await element.waitFor({state : "visible"});
        await element.selectOption(value)
    };

    async scollUntil (locator: string) {
        const element = fixture.page.locator(locator);
        await element.waitFor({state : "visible"});
        await element.scrollIntoViewIfNeeded()
    };

    async getText (locator: string) { 
        const element = fixture.page.locator(locator);
        await element.waitFor({state : "visible"});
        await element.textContent();
    };

    async getAttribute (locator: string, attributeValue : string) { 
        const element = fixture.page.locator(locator);
        await element.waitFor({state : "visible"});
        await element.getAttribute(attributeValue);
    };

    //assertions
    async elementIsVisible (locator: string) {
        const element = fixture.page.locator(locator);
        await expect(element).toBeVisible();
    };

    async elementIsNotVisible (locator: string) {
        const element = fixture.page.locator(locator);
        await expect(element).toBeHidden();
    };

    async inputHasValue (locator: string, value: string) {
        const element = fixture.page.locator(locator);
        await expect(element).toHaveValue(value);
    };

    async pageHasUrl (expectedUrl: string) {
        const actualUrl = fixture.page.url();
        expect(actualUrl).toBe(expectedUrl);
    };
}