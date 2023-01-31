const {
  Given,
  When,
  Then,
  AfterStep,
  BeforeAll,
  AfterAll,
  Before,
  After
} = require("@cucumber/cucumber");

var {
  setDefaultTimeout
} = require('@cucumber/cucumber');

const assert = require("assert").strict;

setDefaultTimeout(120 * 1000);

Given('I am logged in to the application', async () => {
  await DoIteration.StartUpAndLogin()
});

When('I click on create an Issue button', async ()=> {
  await DoIteration.HomepageLib.ClickCreateButton(DoIteration)
});

When('I select the issue properties from the create issue popup', async(ParameterData) => {
  DoIteration.Issuetype = ParameterData.raw()[1][0]
  DoIteration.Reporter = ParameterData.raw()[1][1]
  DoIteration.Assignee = ParameterData.raw()[1][2]
  DoIteration.Priority = ParameterData.raw()[1][3]
  DoIteration.Summary = ParameterData.raw()[1][4]
  DoIteration.Description = ParameterData.raw()[1][5]
  await DoIteration.CreatIssueLib.Create(DoIteration);
})

Then('The issue appeares on the board with the same summary',async(ParameterData)=> {
  DoIteration.Summary = ParameterData.raw()[1][0]
  let actualresult = await DoIteration.HomepageLib.VerifyIssueName(DoIteration)
  console.log({actualresult})
  assert.equal(actualresult,DoIteration.Summary)
});


