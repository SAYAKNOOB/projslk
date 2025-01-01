import { expect } from "@playwright/test";
import { fixture } from "../hooks/pageFixture";

// Ensure fixture is initialized properly
if (!fixture.page) {
    throw new Error("fixture.page is not initialized");
}
export default class DashboardPage {
    // async navigateToDashBoard() {
    //     await fixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // }

    async checkDashboardHeader() {
        const header = fixture.page.locator(' //h6[text()="Dashboard"]');
        await expect(header).toBeVisible();
    }
    async checkUpgradeButton() {
        const upgradeButton = fixture.page.locator('//button[@class="oxd-glass-button orangehrm-upgrade-button"]');
        await expect(upgradeButton).toBeVisible();
    }
    async checkJhonDoeDropdown() {
        const userDropdown = fixture.page.locator('//span[@class="oxd-userdropdown-tab"]');
        await expect(userDropdown).toBeVisible();
        await fixture.page.waitForTimeout(2000);
        await userDropdown.click();
        const aboutDropdownPresent = await fixture.page.locator('//a[text()="About"]').isVisible();
        const supportDropdownPresent = await fixture.page.locator('//a[text()="Support"]').isVisible();
        const changePasswordDropdownPresent = await fixture.page.locator('//a[text()="Change Password"]').isVisible();
        const logoutDropdownPresent = await fixture.page.locator('//a[text()="Logout"]').isVisible();

        console.log('About Dropdown Present:', aboutDropdownPresent);
        console.log('Support Dropdown Present:', supportDropdownPresent);
        console.log('Change Password Dropdown Present:', changePasswordDropdownPresent);
        console.log('Logout Dropdown Present:', logoutDropdownPresent);
    }
    async checkAboutDropdown() {
        const aboutDropdown = fixture.page.locator('//a[text()="About"]');
        await expect(aboutDropdown).toBeVisible();
    }
    async checkSupportDropdown() {
        const supportDropdown = fixture.page.locator('//a[text()="Support"]');
        await expect(supportDropdown).toBeVisible();
    }
    async checkChangePasswordDropdown() {
        const changePasswordDropdown = fixture.page.locator(' //a[text()="Change Password"] ');
        await expect(changePasswordDropdown).toBeVisible();
    }
    async checkLogoutDropdown() {
        const logoutDropdown = fixture.page.locator('//a[text()="Logout"]');
        await expect(logoutDropdown).toBeVisible();
    }
    
}
