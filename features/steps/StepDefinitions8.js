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

When('I add a comment',async(ParameterData) =>{
    const comment = ParameterData.raw()[1][0]
    await DoIteration.IssueProperitiesLib.addIssueComment(DoIteration, comment)
});

Then('The comment appears in the issue',async(ParameterData) =>{
    const addedComment = ParameterData.raw()[1][0]
    const issueComments = await DoIteration.IssueProperitiesLib.getComments(DoIteration)
    assert(issueComments.include(addedComment))
});

When('I edit the comment',async(ParameterData) =>{
    const updatedComment = ParameterData.raw()[1][0]
    await DoIteration.IssueProperitiesLib.editComment(DoIteration, updatedComment)
});

Then('The comment should be changed accordingly',async(ParameterData) =>{
    const updatedComment = ParameterData.raw()[1][0]
    const actualComment = await DoIteration.IssueProperitiesLib.getLastComment(DoIteration)
    assert.equal(updatedComment, actualComment)
});

When('I delete the comment',async() =>{
    await DoIteration.IssueProperitiesLib.deleteAddedComment(DoIteration)
});

Then('The comment no longer appears on the issue',async(ParameterData) =>{
    const deletedComment = ParameterData.raw()[1][0]
    const issueComments = await DoIteration.IssueProperitiesLib.getComments(DoIteration)
    assert(!issueComments.include(deletedComment))
});