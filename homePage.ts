import { expect, Page } from "@playwright/test";
import { fixture } from "../hooks/pageFixture";

// Ensure fixture is initialized properly
if (!fixture.page) {
    throw new Error("fixture.page is not initialized");
}

export default class HomePage {
    async navigateToGoogle() {
        await fixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async searchOrangeHRM() {
        await fixture.page.locator('input[name="q"]').fill('Admin');
        await fixture.page.locator('input[name="q"]').press('Admin123');
        await fixture.page.waitForSelector('text=Playwright');
    }

    async checkLoginPageElements() {
        // Check if the login button is visible
        const loginButton = fixture.page.locator('button[type="submit"]');
        await expect(loginButton).toBeVisible({ timeout: 1000 }); 
    
        // Check if the username field is visible
        const usernameField = fixture.page.locator('input[name="username"]');
        await expect(usernameField).toBeVisible({ timeout: 1000 });
    
        // Check if the password field is visible
        const passwordField = fixture.page.locator('input[name="password"]');
        await expect(passwordField).toBeVisible({ timeout: 1000 });

        const footerLogo = fixture.page.locator('//div[@class="orangehrm-login-logo"]//img[@alt="orangehrm-logo"]');
        await expect(footerLogo).toBeVisible({ timeout: 1000 });

        const headerLogo = fixture.page.locator('//img[@alt="company-branding"]');
        await expect(headerLogo).toBeVisible({ timeout: 1000 });
    
    }

    async wrongCredentials() {
        await fixture.page.locator('input[name="username"]').fill('Admin');
        await fixture.page.locator('input[name="username"]').fill('admin1234');
        await fixture.page.locator('button[type="submit"]').click();
        await fixture.page.waitForSelector('text=Invalid credentials');
        await fixture.page.waitForTimeout(5000);
    }

        async forgotPassword() {
            const forgotPasswordLink = fixture.page.locator('//p[text()="Forgot your password? "]');
            await expect(forgotPasswordLink).toBeVisible({ timeout: 1000 });
            await forgotPasswordLink.click();
            await fixture.page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
            const usernameField = fixture.page.locator('//input[@name="username"]');
            await usernameField.fill('Admin');
            const resetPasswordButton = fixture.page.locator('button[type="submit"]');
            await resetPasswordButton.click();
            const successMessage = fixture.page.locator('text=Reset Password link sent successfully');
            await expect(successMessage).toBeVisible({ timeout: 1000 });
        }
    }



