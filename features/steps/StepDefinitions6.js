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

When('I change the status to {string}',async(VerifiedText) =>{

   DoIteration.Text = VerifiedText;
   await DoIteration.IssueProperitiesLib.changeStatus(DoIteration, DoIteration.Text)

});

Then('The issue appers on the board under the coresponding column',async (ParameterData) =>{

  let column = ParameterData.raw()[1][0]
  let expectedSummary = ParameterData.raw()[1][1]
  let actualSummary = await DoIteration.HomepageLib.getFirstIssueSummary(DoIteration, column)
  assert.equal(expectedSummary, actualSummary)

});