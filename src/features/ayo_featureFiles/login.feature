Feature: To validate the login page
   As a user, login to the AYO site and validate the login page

@login
Scenario Outline:Login as staff user
Given the user logged into the <ayo_site>

Examples:
    | ayo_site       |
    | 'ayo_staffUser'|