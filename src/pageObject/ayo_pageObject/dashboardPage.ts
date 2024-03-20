import {page} from "../../support/hooks"
import { Locator } from 'playwright';

export const dashboardPage = {
    libraries: () : Locator => page.getByRole('link', { name: 'Libraries' }),
    mySpaces: () : Locator => page.getByRole('link', { name: 'My Spaces' }),
    admin: () : Locator => page.getByRole('link', { name: 'Admin' }),
    help: () : Locator => page.getByRole('link', { name: 'Help' }),
    profile: () : Locator => page.getByRole('link', { name: 'Profile' }),
    logOut: () : Locator => page.getByRole('link', { name: 'Logout' }),
    createSpace: () : Locator => page.getByText('Create Space'),
    searchBar: () : Locator => page.getByPlaceholder('Search'),
    showArchieve_toggle: '//p[text() = "Show archived"]//preceding-sibling::label[contains(@class, "instructor-switch")]',
    sortBy: '//label[text() ="Sort by:"]//parent::div//following-sibling::select[@id = "staffSorter"]',

    //footer elements
    footerText: '//div[contains(@class, "footer-info")]//child::p[contains(text(), "Australian")]//following-sibling::p[contains(text(), "We pay our respects")]',
    ayoHome: () : Locator => page.getByRole('link', { name: 'AYO Homepage'}),
    facebookLink: '//a[contains(@href, "facebook")]//child::img',
    linkedin: '//a[contains(@href, "linkedin")]//child::img',
    footerImg1: '//div[contains(@class, "footer-logo-content")]//child::img[contains(@src, "Group")]',
    footerImg2: '//div[contains(@class, "footer-logo-content")]//child::img[contains(@src, "arts")]',
    privacyPolicy: () : Locator => page.getByRole('link', { name: 'Privacy Policy'}),
    safetyPolicy: () : Locator => page.getByRole('link', { name: 'Child Safety Policy'}),
    copyrightText: () : Locator => page.getByText('Copyright © 2024 - Australian Youth Orchestra'),
 
    //Reference for other types
    // getLabel: () : Locator => page.getByLabel('label'),
    // getAltText: () : Locator => page.getByAltText('text'),
    // getTitle: () : Locator => page.getByTitle('Title'),
}