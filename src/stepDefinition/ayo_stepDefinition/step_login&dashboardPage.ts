
import {Given, When, Then} from "@cucumber/cucumber"
import LoginPage from "../../pageAction/ayo_pageAction/loginPage"
import DashboardPage from "../../pageAction/ayo_pageAction/dashboardPage";
import {page} from "../../support/hooks"
//=========================================================================================================================

let loginPage: LoginPage;
loginPage = new LoginPage(page);
let dashboardPage : DashboardPage;
dashboardPage = new DashboardPage(page);

Given('the {string} logged into the {string}', async function (user, site) {
    await loginPage.navigateToLoginPage(site);
    await loginPage.validateLoginPage_elements();
    await loginPage.passCredentialsAnd_login(user);
});

When('the {string} lands on the space dashboard', async function (user) {
    await dashboardPage.dashboardNavigation(user);
});

When('the {string} validates the space dashboard elements', async function (user) {
    await dashboardPage.dashboardHeaderValidation(user);
    await dashboardPage.dashboardFooterElements();
});

When('the user validates the space dashboard footer links', async function () {
    await dashboardPage.dashboardFooter_linkValidation();
});