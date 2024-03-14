# Automation_Playwright_BDD
This repo have the basic project structure for Playwright with typescript and cucumber BDD frameworks

## Project structure

- src -> Contains all the features & Typescript code


## Get Started

### Setup:

1. Clone or download the project
2. Extract and open in the VS-Code
3. `npm i` to install the dependencies
4. `npx playwright install` to install the browsers
5. `npm run test` to execute the tests
6. To run a particular test change  
```
  paths: [
            "src/test/features/featurename.feature"
         ] 
```
7. Use tags to run a specific or collection of specs
```
npm run test --TAGS="@test1 or @test2"
```
### Folder structure
1. `src\test\features` -> write your features here
2. `src\test\steps` -> Your step definitions goes here
3. `src\hooks\hooks.ts` -> Browser setup and teardown logic
4. `cucumber.json` -> One file to do all the configs
5. `package.json` -> Contains all the dependencies

## Tutorials
1. Learn Playwright - [Playwright - TS](https://playwright.dev/docs/intro)
2. Learn CucumberBDD - [CucumberBDD](https://cucumber.io/docs/cucumber/)