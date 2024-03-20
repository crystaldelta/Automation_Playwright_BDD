Feature: To validate the login page
   As a user, login to the AYO site and validate the login page

   @login
   Scenario Outline:Login as staff user
      Given the <user> logged into the <site>
      When the <user> lands on the space dashboard
      And the <user> validates the space dashboard elements

      Examples:
         | user        | site  |
         | 'ayo_staff' | 'ayo' |