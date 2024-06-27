import { Given, When, Then , setDefaultTimeout} from "@cucumber/cucumber"
import { page } from "../../hooks/hooks";
setDefaultTimeout(60 * 1000 * 2)

Given('user is in home page', async function () {
    await page.goto('https://uat.online.rmit.edu.au/');
});
When('user clicks courses and degree', async function () {
    await page.getByRole('link', { name: 'Courses & degrees', exact: true }).click();
});
Then('user should get navigated to the course catelog page', async function () {
    // await page.pause()
    await page.getByRole('heading', { name: 'Courses & degrees123' }).click();
    await page.getByRole('button', { name: 'Future Skills short courses' }).click();
    await page.getByRole('link', { name: 'Future Skills short course Sustainability and climate-related financial' }).click();
    await page.getByRole('heading', { name: 'Sustainability and climate-' }).click();
});