const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');
const LoginPage = require('../../tests/pom/loginPage');
const LogoutPage = require('../../tests/pom/logoutPage');

let browser, context, page, loginPage,logoutPage;

Given('the user navigates to the login page', async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  await loginPage.navigateToLogin();
});

When('the user enters username {string} and password {string}', async (username, password) => {
  await loginPage.login(username, password);
});

Then('the user should see the dashboard', async () => {
  await expect(page).toHaveTitle(/Administrator/);
  logoutPage = new LogoutPage(page);
  await logoutPage.logout();
  await expect(page).toHaveTitle(/vtiger CRM 5/);
  await browser.close();
});
