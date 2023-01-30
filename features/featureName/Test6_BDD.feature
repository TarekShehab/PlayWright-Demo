Feature: Move Issue from a dashboard to another one

    Scenario: 006 Check the functionality of moving an Issue from a dashboard to another one

        Given I am logged in to the application
        When  I click on create an Issue button
        When  I select the issue properties from the create issue popup
            | Issuetype | Reporter  | Assignee  | Priority | Summary              | Description                                                               |
            | Story     | Baby Yoda | Baby Yoda | Low      | PlaywrightDemo Issue | This issue is to test the functionality of Creating and deleting an Issue |
        When  I click on the issue on the board
        When  I change the status to 'IN PROGRESS'
        Then  The issue appers on the board under the coresponding column
            | Status      | Summary              |
            | IN PROGRESS | PlaywrightDemo Issue |
