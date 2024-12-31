Feature: Login Page Validation
    @Login
    Scenario: Login Page Validation
        Given I open the login page
        When I enter the username as "admin" and password as "admin123"
        And I click on login button
        Then I should see the userform page