Feature: Framework overview create and delete

    Scenario: 008 Create Issue, Add, Edit and delete comment

        Given I am logged in to the application
        When  I click on create an Issue button
        When  I select the issue properties from the create issue popup
            | Issuetype | Reporter  | Assignee  | Priority | Summary              | Description                                                               |
            | Story     | Baby Yoda | Baby Yoda | Low      | PlaywrightDemo Issue | This issue is to test the functionality of Creating and deleting an Issue |
        When  I click on the issue on the board
        When  I add a comment
            | Comment     |
            | Hello World |
        Then  The comment appears in the issue
            | Comment     |
            | Hello World |

        When  I edit the comment
            | Comment            |
            | Edited Hello World |
        Then  The comment should be changed accordingly
            | Comment            |
            | Edited Hello World |

        When  I delete the comment
        Then  The comment no longer appears on the issue
            | Comment     |
            | Hello World |