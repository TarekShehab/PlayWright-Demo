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

When('I drag and drop the issue to {string} column',async(VerifiedText, ParameterData) => {
    const column = VerifiedText;
    const dragedIssueSummary = ParameterData.raw()[1][0];
    await DoIteration.HomepageLib.dragAndDropIssue(DoIteration, dragedIssueSummary, column);
});  

Then('The issue is moved to the {string} column'), async(VerifiedText, ParameterData) => {

    const column = VerifiedText;
    const movedIssueSummary = ParameterData.raw()[1][0];
    const columnSummaries = await DoIteration.HomepageLib.getColumnSummaries(DoIteration, column);
    assert(columnSummaries.includes(movedIssueSummary));  
}
