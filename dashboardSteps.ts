import { Given, Then, When } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";

Given('user navigates to the OrangeHRM Dashboard page', async function () {
    await fixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await fixture.page.waitForTimeout(2000); 
    await fixture.page.fill('input[name="username"]', 'Admin');
    await fixture.page.fill('input[name="password"]', 'admin123');
    await fixture.page.click('button[type="submit"]');
});
When(`user checks the presence of the Dashboard header`, async function () {
    const header = fixture.page.locator('//h6[text()="Dashboard"]');
    await expect(header).toBeVisible();
});
Then(`user checks the presence of the Upgrade button` , async function () {
    const upgradeButton = fixture.page.locator(' //button[@class="oxd-glass-button orangehrm-upgrade-button"]');
    await expect(upgradeButton).toBeVisible();
});
Then('user checks the presence of the Jhon Doe dropdown', async function () {
    const userDropdown = fixture.page.locator(' //span[@class="oxd-userdropdown-tab"]');
    await expect(userDropdown).toBeVisible();
});
Then(`user checks the presence of the About dropdown`, async function () {
    const aboutDropdown = fixture.page.locator('//a[text()="About"]');
    await expect(aboutDropdown).toBeVisible();
});
Then(`user checks the presence of the Support dropdown`, async function () {
    const supportDropdown = fixture.page.locator(' //a[text()="Support"]');
    await expect(supportDropdown).toBeVisible();
});
Then('user checks the presence of the Change password dropdown', async function () {
    const changePasswordDropdown = fixture.page.locator('//a[text()="Change Password"] ');
    await expect(changePasswordDropdown).toBeVisible();
});
Then('user checks the presence of the Logout dropdown', async function () {
    const logoutDropdown = fixture.page.locator('//a[text()="Logout"]');
    await expect(logoutDropdown).toBeVisible();
});
