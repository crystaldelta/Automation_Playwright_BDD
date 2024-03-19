Feature: To validate the login page
   As a user, login to the AYO site and validate the login page

Scenario Outline: Login as staff user

@login
Given the user logged in as <ayo_staffUser>

Examples:
    | ayo_staffUser | 
    | 'Value 1'     | 