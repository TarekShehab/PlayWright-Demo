const { CreateIssuePage } = require('../Pages/CreateIssuePage.js');
const { BaseClass } = require('./Base');

class CreateIssueLib extends BaseClass {

    async Create(IterationInstance) {
        const createissue = new CreateIssuePage(IterationInstance.KeepPage);
        await createissue.SelectIssueType(IterationInstance.Issuetype);
        await this.delay(1000);
        await createissue.SelectAssignee(IterationInstance.Assignee);
        await this.delay(1000);
        await createissue.SelectPriority(IterationInstance.Priority);
        await this.delay(1000);
        await createissue.SelectReporter(IterationInstance.Reporter);
        await this.delay(1000);
        await createissue.TypeSummary(IterationInstance.Summary);
        await this.delay(1000);
        await createissue.TypeDescription(IterationInstance.Description);
        await this.delay(1000);
        await createissue.Clicksubmit();
        await this.delay(30000);
    }

}

module.exports.CreateIssueLib = CreateIssueLib;
