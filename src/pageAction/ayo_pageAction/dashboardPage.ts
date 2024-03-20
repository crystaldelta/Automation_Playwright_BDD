import { Page } from "@playwright/test";
import reusables from "../../utils/utility";
import { dashboard as data } from "../../utils/testData";
import { dashboardPage } from "../../pageObject/ayo_pageObject/dashboardPage";
import { logger } from "../../support/logger";
//===============================================================================================================================
export default class dashboard {
    private utility: reusables;
    constructor(private page: Page) { this.utility = new reusables(page) }

    async dashboardNavigation(user: string) {
        if (user == "ayo_staff" || user == "ayo_learner") {
            await this.utility.elementIsVisible(dashboardPage.mySpaces());
            await this.utility.pageHasUrl(data.space_dashboardUrl);
            logger.info('Validated the dashboard Url: ' + data.space_dashboardUrl);
        }
    };

    async dashboardHeaderValidation(user: string) {
        if (user == "ayo_staff") {
            await this.utility.elementIsVisible(dashboardPage.mySpaces());
            await this.utility.elementIsVisible(dashboardPage.libraries());
            await this.utility.elementIsVisible(dashboardPage.admin());
            await this.utility.elementIsVisible(dashboardPage.help());
            await this.utility.elementIsVisible(dashboardPage.profile());
            await this.utility.elementIsVisible(dashboardPage.logOut());

            await this.utility.elementIsVisible(dashboardPage.createSpace());
            await this.utility.elementIsVisible(dashboardPage.searchBar());
            await this.utility.elementIsVisible(dashboardPage.showArchieve_toggle);
            await this.utility.elementIsVisible(dashboardPage.sortBy);
        } else if (user == "ayo_learner") {
            await this.utility.elementIsVisible(dashboardPage.help());
            await this.utility.elementIsVisible(dashboardPage.profile());
            await this.utility.elementIsVisible(dashboardPage.logOut());
            await this.utility.elementIsVisible(dashboardPage.mySpaces());
            await this.utility.elementIsNotVisible(dashboardPage.libraries());
            await this.utility.elementIsNotVisible(dashboardPage.admin());

            await this.utility.elementIsNotVisible(dashboardPage.createSpace());
            await this.utility.elementIsNotVisible(dashboardPage.searchBar());
            await this.utility.elementIsNotVisible(dashboardPage.showArchieve_toggle);
            await this.utility.elementIsNotVisible(dashboardPage.sortBy);
        }
        logger.info('Validated the Header elements availability in Dashboard')
    };

    async dashboardFooterElements() {
        try {
            await this.utility.elementIsVisible(dashboardPage.copyrightText());
        } catch (e) {
            await this.utility.scollUntil(dashboardPage.copyrightText());
        }
        await this.utility.elementIsVisible(dashboardPage.footerText);
        await this.utility.elementIsVisible(dashboardPage.ayoHome());
        await this.utility.elementIsVisible(dashboardPage.facebookLink);
        await this.utility.elementIsVisible(dashboardPage.linkedin);
        await this.utility.elementIsVisible(dashboardPage.footerImg1);
        await this.utility.elementIsVisible(dashboardPage.footerImg2);
        await this.utility.elementIsVisible(dashboardPage.privacyPolicy());
        await this.utility.elementIsVisible(dashboardPage.safetyPolicy());
        logger.info('Validated the Footer elements availability in Dashboard');
    };

    async dashboardFooter_linkValidation() {
        await this.utility.click(dashboardPage.ayoHome());
        await this.utility.validate_NewTabUrl(data.ayo_Official);
        await this.utility.click(dashboardPage.facebookLink);
        await this.utility.validate_NewTabUrl(data.ayo_Facebook);
        await this.utility.click(dashboardPage.linkedin);
        await this.utility.validate_NewTabUrl(data.ayo_LinkedIn);
        await this.utility.click(dashboardPage.privacyPolicy());
        await this.utility.validate_NewTabUrl(data.ayo_privacyPolicy);
        await this.utility.click(dashboardPage.safetyPolicy());
        await this.utility.validate_NewTabUrl(data.ayo_safetyPolicy);
        logger.info('Validated the Footer element links from the dashboard');
    };
}