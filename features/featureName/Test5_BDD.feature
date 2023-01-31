Feature: Delete Issue

    Scenario: 005 Create an issue on the application Kanban board and then delete it

        Given I am logged in to the application
        When  I click on create an Issue button
        When  I select the issue properties from the create issue popup
            | Issuetype | Reporter  | Assignee  | Priority | Summary              | Description                                                               |
            | Story     | Baby Yoda | Baby Yoda | Low      | PlaywrightDemo Issue | This issue is to test the functionality of Creating and deleting an Issue |
        Then  The issue appeares on the board with the same summary
            | Summary              |
            | PlaywrightDemo Issue |

        When  I click on the issue on the board
        Then  The summary appears as entered
            | Summary              |
            | PlaywrightDemo Issue |

        When  I delete the issue
        Then  The issue no longer appears on the board
            | Summary              |
            | PlaywrightDemo Issue |

