Feature: Create Issue and search for it

    Scenario: 002 Search for the created issue on the application Kanban board

        Given I am logged in to the application
        When  I click on create an Issue button
        When  I select the issue properties from the create issue popup
            | Issuetype | Reporter  | Assignee   | Priority | Summary     | Description                                              |
            | Bug       | Baby Yoda | Lord Gaben | Low      | Issue Test2 | This Test is to test the functionality of the search bar |
        When  I search for the created issue with summary name
            | summary     |
            | Issue Test2 |
        Then  The issue appeares on the board with the same summary
            | Summary     |
            | Issue Test2 |