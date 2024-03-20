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

    
    //Reference for other types
    // getLabel: () : Locator => page.getByLabel('label'),
    // getPlaceHolder: () : Locator => page.getByPlaceholder('placeholder'),
    // getAltText: () : Locator => page.getByAltText('text'),
    // getTitle: () : Locator => page.getByTitle('Title'),
}