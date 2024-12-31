import {Given, When, Then } from "@cucumber/cucumber";
import HomePage from "../../pages/homePage";

let homePage: HomePage;

Given('I open the login page', async function () {

  await homePage.goto('http://your-login-page-url.com');

});

When('I search for {string}', async (searchTerm: string) => {
  await homePage.searchFor(searchTerm);
});

Then('I should see search results', async () => {
  // Add your assertion here
});


// import { Given, When, Then } from '@cucumber/cucumber';

// import { page } from '../support/world';


