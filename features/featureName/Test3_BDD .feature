Feature: Check The UI Functionality

    Scenario: 003 Verify the functionality of Kanban board UI project settings tab 
    
        Given I am logged in to the application
        When  I click on the project settings tab 
        Then  I can see 'Project Details' text appearing on the screen
        When  I change some of project settings such as 
        | Name                     | ProjectCategory  |
        | Playwright Project       | Business        |
        Then  The project name and cotegory are changed above on the left hand side with the same modifications