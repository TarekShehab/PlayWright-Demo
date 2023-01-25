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

Then('The rest of the tabs are not implemented',async()=>{
    let areTabsNotImplemented = await DoIteration.ProjectSettingsLib.VerfyTabsNotImplemented(DoIteration)
    assert(areTabsNotImplemented)
});