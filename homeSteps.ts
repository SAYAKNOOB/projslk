//for login
import { Given, Then, When } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";

Given('user navigates to the OrangeHRM login page', async function () {
    await fixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await fixture.page.waitForTimeout(2000); 
});

When("user enters his username as {string}", async function (username:string) {
    const usernameInput = fixture.page.locator('input[name="username"]');
    await usernameInput.fill(username); 
    await fixture.page.waitForTimeout(1000);

});

When("user enters his password as {string}", async function (password:string) {
    const passwordInput = fixture.page.locator('input[name="password"]');
    await passwordInput.type(password); 
    await fixture.page.waitForTimeout(1000);
});

Then('user clicks on login button', async function () {
    const loginButton = fixture.page.locator('button[type="submit"]'); 
    await loginButton.click();
    await fixture.page.waitForSelector('.oxd-userdropdown'); 

});

// for checking the presence of the elements


When('check the presence of the login button', async function () {
    const loginButton = fixture.page.locator('button[type="submit"]');
    await expect(loginButton).toBeVisible();
});

Then('check the presence of the username field', async function () {
    const usernameInput = fixture.page.locator('input[name="username"]');
    await expect(usernameInput).toBeVisible(); 
});

Then('check the presence of the password field', async function () {
    const passwordInput = fixture.page.locator('input[name="password"]');
    await expect(passwordInput).toBeVisible();
});

Then('check for the orange hrm logo in the login page', async function () {
    await fixture.page.waitForSelector('//div[@class="orangehrm-login-logo"]//img[@alt="orangehrm-logo"]'); 
    const logo = fixture.page.locator('//div[@class="orangehrm-login-logo"]//img[@alt="orangehrm-logo"]');
    await expect(logo).toBeVisible(); 
});

Then('check OrangeHRM logo present on the header section', async function () {
    await fixture.page.waitForSelector('//img[@alt="company-branding"]');
    const logo = fixture.page.locator('//img[@alt="company-branding"]');
    await expect(logo).toBeVisible(); 
});

//check with wrong credentials


When('user enters wrong username as {string}', async function (username) {
    const usernameInput = fixture.page.locator('input[name="username"]');
    await usernameInput.type(username); 
    await fixture.page.waitForTimeout(1000);
});
Then('user enters wrong password as {string}', async function (password) {  
    const passwordInput = fixture.page.locator('input[name="password"]');
    await passwordInput.type(password); 
    await fixture.page.waitForTimeout(1000);
});

//check forgot password link
When('check the presence of the forgot password link', async function () {
    await fixture.page.waitForSelector('//p[text()= "Forgot your password? "]');
    const forgotPasswordLink = fixture.page.locator('//p[text()= "Forgot your password? "]');
    // await expect(forgotPasswordLink).toBeVisible(); 
});
Then('click on the forgot password link', async function () {
    const forgotPasswordLink = fixture.page.locator('//p[text()= "Forgot your password? "]');
    await forgotPasswordLink.click();
    // await fixture.page.waitForSelector('text=Reset Password');
});
Then('fill the username field as {string}', async function (username:string) {
    const usernameInput = fixture.page.locator('//input[@name="username"]');
    await usernameInput.type(username); 
    await fixture.page.waitForTimeout(1000);
});
Then('click on the reset password button', async function () {
    const resetPasswordButton = fixture.page.locator('//button[@type="submit"]');
    await expect(resetPasswordButton).toBeVisible();
    await resetPasswordButton.click();

});
Then('check for the {string} message', async function (expectedMessage:string) {
    const confirmationMessage = fixture.page.locator(`//h6[text()="Reset Password link sent successfully"]`);
    await expect(confirmationMessage).toBeVisible();
});

Then('wrong username message should be displayed', async function () {
    const wrongUsernameMessage = fixture.page.locator('//span[text()="Invalid credentials"]');
    await expect(wrongUsernameMessage).toBeVisible();
});
// Then('check for the {string} message', async function () {
//     await fixture.page.waitForSelector('text=Password reset instructions have been sent to your email');
//     const confirmationMessage = fixture.page.locator('text=Password reset instructions have been sent to your email');
//     await expect(confirmationMessage).toBeVisible(); 
// });
