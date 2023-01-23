Feature: Create Issue

    Scenario: 001 Start this application and create an issue on the application Kanban board
    
        Given I am logged in to the application
        When  I click on create an Issue button
        When  I select the issue properties from the create issue popup
        | Issuetype | Reporter  | Assignee  | Priority | Summary    | Description                                                  |
        | Story     | Baby Yoda | Baby Yoda | High     | Issue Test | This issue is to test the functionality of Creating an Issue |
        Then  The issue appeares on the board with the same summary
        | Summary    |
        | Issue Test |