Feature: Drag and drop Issue from a dashboard to another one

    Scenario: 007 Check the functionality of dragging and dropping an Issue from a dashboard to another one

        Given I am logged in to the application
        When  I click on create an Issue button
        When  I select the issue properties from the create issue popup
            | Issuetype | Reporter  | Assignee  | Priority | Summary              | Description                                                               |
            | Story     | Baby Yoda | Baby Yoda | Low      | PlaywrightDemo Issue | This issue is to test the functionality of Creating and deleting an Issue |
        When  I drag and drop the issue to 'Done' column
            | Summary              |
            | PlaywrightDemo Issue |
        Then  The issue is moved to the 'Done' column
            | Summary              |
            | PlaywrightDemo Issue |