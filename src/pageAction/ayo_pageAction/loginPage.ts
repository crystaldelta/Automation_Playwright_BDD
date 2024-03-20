import { Page } from "@playwright/test";
import { loginCreds as data}  from "../../utils/testData";
import { loginPage } from "../../pageObject/ayo_pageObject/loginPage";
import { dashboardPage } from "../../pageObject/ayo_pageObject/dashboardPage";
import reusables from "../../utils/utility";
import {logger} from "../../support/logger";
//=======================================================================================================================

export default class login {
    private utility: reusables;
    constructor(private page: Page) { this.utility = new reusables(page) }

    async navigateToLoginPage(site: string) {
        if (site == "ayo") {
            await this.utility.goTo(data.ayo_url);
        }
    };

    async validateLoginPage_elements() {
        await this.utility.elementIsVisible(loginPage.ayo_officialLink);
        await this.utility.elementIsVisible(loginPage.ayo_bannerImage);
        await this.utility.elementIsVisible(loginPage.ayo_loginLogoText);
        await this.utility.elementIsVisible(loginPage.ayo_loginMessage);
        await this.utility.click(loginPage.ayo_forgotPassword);

        await this.utility.elementIsVisible(loginPage.ayo_resetPassword_header);
        await this.utility.elementIsVisible(loginPage.ayo_resetPassword_instructions);
        await this.utility.elementIsVisible(loginPage.ayo_resetPassword_btn);
        await this.utility.elementIsVisible(loginPage.ayo_resetPassword_cancel);
        await this.utility.elementIsVisible(loginPage.ayo_resetModal_close);
        await this.utility.click(loginPage.ayo_resetModal_close);
        logger.info('Validated the Login page & Forgot password section elements');
    };

    async passCredentialsAnd_login(user: string) {
        if (user == 'ayo_staff') {
        await this.utility.fill(loginPage.ayo_username, data.staff_userName);
        await this.utility.fill(loginPage.ayo_password, data.password);
        } else {

        }
        await this.utility.click(loginPage.ayo_logiBtn);
        await this.utility.elementIsVisible(dashboardPage.mySpaces());
        logger.info(`${user} logged in successfully`)
    };

}