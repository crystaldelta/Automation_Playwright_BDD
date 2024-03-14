import { Given, When, Then , setDefaultTimeout} from "@cucumber/cucumber"
import { page } from "../../hooks/hooks";
setDefaultTimeout(60 * 1000 * 2)

Given('user is on front end blog page', async function () {
    await page.goto('https://uat.online.rmit.edu.au/');
});
When('user finds the articles on blog page', async function () {
    await page.getByRole('link', { name: 'Blog', exact: true }).click();
    await page.getByRole('heading', { name: 'Blog' }).click();
});
Then('user should able to see the old articles on more article section in the blog page', async function () {
    await page.getByRole('heading', { name: 'More articles' }).click();
    await page.getByRole('link', { name: 'Transforming healthcare' }).click();
    await page.getByRole('heading', { name: 'Transforming healthcare' }).click();
});