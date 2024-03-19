import { fixture } from "../../support/pageFixture"
import {Given, When, Then} from "@cucumber/cucumber"
import LoginPage from "../../pageAction/ayo_pageAction/loginPage"
//=========================================================================================================================

let loginPage: LoginPage;
loginPage = new LoginPage(fixture.page);

Given('the user logged into the {string}', async function (string) {
    await loginPage.navigateToLoginPage(string);
    await loginPage.validateLoginPage_elements();
    await loginPage.passCredentialsAnd_login();
});