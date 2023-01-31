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

When('I click on the issue on the board',async() =>{
  await DoIteration.HomepageLib.ClickOnTheIssueCreated(DoIteration)
});

Then('The summary appears as entered',async (ParameterData) =>{
  let enteredSummary = ParameterData.raw()[1][0]
  let actualSummary = DoIteration.IssueProperitiesLib.getIssueSummary(DoIteration)
  assert.equal(enteredSummary, actualSummary)
});

When('I delete the issue',async() =>{
  await DoIteration.IssueProperitiesLib.deleteIssue(DoIteration)
});

Then('The issue no longer appears on the board',async (ParameterData) => {
  let deletedIssueSummary = ParameterData.raw()[1][0]
  let boardSummaries = DoIteration.HomepageLib.getBoardSummaries(DoIteration)
  assert(!boardSummaries.includes(deletedIssueSummary))
});