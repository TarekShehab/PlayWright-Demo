# Feature: Framework overview create and delete

#     Scenario: 008 Create Issue, Add, Edit and delete comment

#         Given I am logged in to the application
#         When  I click on create an Issue button
#         When  I select the issue properties from the create issue popup
#             | Issuetype | Reporter  | Assignee  | Priority | Summary              | Description                                                               |
#             | Story     | Baby Yoda | Baby Yoda | Low      | PlaywrightDemo Issue | This issue is to test the functionality of Creating and deleting an Issue |
#         When  I click on the issue on the board
#         When  I add a comment
#         Then  The comment appears in the issue

#         When  I click the delete button
#         Then  The issue is no longer appears on the board
