import { Page } from "@playwright/test";
import reusables from "../../utils/utility";
import {dashboard as data} from "../../utils/testData";
import { dashboardPage } from "../../pageObject/ayo_pageObject/dashboardPage";
//===============================================================================================================================

export default class dashboard {
    private utility: reusables;
    constructor(private page: Page) { this.utility = new reusables(page) }

    async dashboardNavigation(user: string) {
        if (user == "ayo_staff" || user == "ayo_learner")
        await this.utility.elementIsVisible(dashboardPage.mySpaces());
        await this.utility.pageHasUrl(data.space_dashboardUrl);
    };

    async dashboardValidation(user: string) {
        if (user == "ayo_staff") {
            await this.utility.elementIsVisible(dashboardPage.mySpaces());
            await this.utility.elementIsVisible(dashboardPage.libraries());
            await this.utility.elementIsVisible(dashboardPage.admin());
            await this.utility.elementIsVisible(dashboardPage.help());
            await this.utility.elementIsVisible(dashboardPage.profile());
            await this.utility.elementIsVisible(dashboardPage.logOut());

        } else if (user == "ayo_learner") {
            await this.utility.elementIsVisible(dashboardPage.mySpaces());
            await this.utility.elementIsNotVisible(dashboardPage.libraries());
            await this.utility.elementIsNotVisible(dashboardPage.admin());
            await this.utility.elementIsVisible(dashboardPage.help());
            await this.utility.elementIsVisible(dashboardPage.profile());
            await this.utility.elementIsVisible(dashboardPage.logOut());

        }

    };
}
