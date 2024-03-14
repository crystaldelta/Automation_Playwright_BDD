Feature: Validate blog page content
    As a tester, I want to verify blog article page

    @test1
    Scenario: Validate more articles section on blog page
        Given user is on front end blog page
        When user finds the articles on blog page
        Then user should able to see the old articles on more article section in the blog page