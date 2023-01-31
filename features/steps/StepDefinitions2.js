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

setDefaultTimeout(120 * 1000);

When('I search for the created issue with summary name',async(ParameterData)=>{
  DoIteration.Summary = ParameterData.raw()[1][0]
  await DoIteration.HomepageLib.SearchForCreatedIssue(DoIteration)
});