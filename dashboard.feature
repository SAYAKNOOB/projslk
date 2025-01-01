Feature: Dashboard Page Validation
Background: 

Given user navigates to the OrangeHRM Dashboard page

@Dashboard
Scenario: Dashboard Page Validation
When user checks the presence of the Dashboard header
Then user checks the presence of the Upgrade button
And user checks the presence of the Jhon Doe dropdown
And user checks the presence of the About dropdown
And user checks the presence of the Support dropdown
And user checks the presence of the Change password dropdown
And user checks the presence of the Logout dropdown