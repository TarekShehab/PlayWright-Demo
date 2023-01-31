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

When('I click on the project settings tab',async() =>{
  await DoIteration.HomepageLib.ClickProjectSettings(DoIteration);
});

Then('I can see {string} text appearing on the screen',async (VerifiedText)=>{
  DoIteration.Text = VerifiedText;
  let actualResult = await DoIteration.ProjectSettingsLib.GetVerificationText(DoIteration);
  assert.equal(actualResult,DoIteration.Text);
});

When('I change some of project settings such as',async(ParameterData) =>{
  DoIteration.name = ParameterData.raw()[1][0];
  DoIteration.category = ParameterData.raw()[1][1];
  await DoIteration.ProjectSettingsLib.InsertDataInSettings(DoIteration)
});

Then('The project name and category are changed above on the left hand side with the same modifications',async()=>{
  let actualResult = await DoIteration.HomepageLib.VerifyProjectName(DoIteration);
  assert.equal(actualResult,DoIteration.name)
  let actualResult2 = await DoIteration.HomepageLib.VerifyProjectCategory(DoIteration);
  assert.ok(actualResult2.toLowerCase().includes(DoIteration.category.toLowerCase()), `actual: "${actualResult2.toLowerCase()}" do not contain expected: "${DoIteration.category}"`);  
});






