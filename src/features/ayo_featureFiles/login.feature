Feature: To validate the Login page Dashboard page
   As a user, login to the AYO site and validate the login and Dashboard page

   @login
   Scenario Outline: Login as staff user and validate the Dashboard elements
      Given the <user> logged into the <site>
      When the <user> lands on the space dashboard
      And the <user> validates the space dashboard elements
      And the user validates the space dashboard footer links

      Examples:
         | user        | site  |
         | 'ayo_staff' | 'ayo' |