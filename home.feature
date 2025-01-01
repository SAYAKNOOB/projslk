Feature: Login Page Validation
Background: 
Given user navigates to the OrangeHRM login page 
    @Login
    Scenario: Login Page Validation with correct credentials
    When user enters his username as "Admin"
    And user enters his password as "admin123"
    Then user clicks on login button

    @Login_wrong_credentials
    Scenario: Login Page Validation with wrong credentials
    When user enters his username as "Admin"
    Then user enters his password as "admin1234"

    @Check_elements
    Scenario: Check the login page element functionalities
    When check the presence of the login button
    Then check the presence of the username field
    And check the presence of the password field
    And check for the orange hrm logo in the login page
    And check OrangeHRM logo present on the header section

    @Check_forgot_password
    Scenario: Check for the presence and the functionalities of the forgot password link
    When check the presence of the forgot password link
    Then click on the forgot password link
    And fill the username field as "Admin"
    And click on the reset password button
    And check for the "Reset Password link sent successfully" message

    


    # @Check_links
    # do this at home laptop

    
   

    
