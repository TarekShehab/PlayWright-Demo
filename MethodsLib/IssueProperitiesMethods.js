const { BaseClass } = require('./Base');
const { IssueProperitiesPage } = require('../Pages/IssueProperitiesPage');

class IssueProperitiesLib extends BaseClass
{
    constructor()
    {
        super();
    }

    // New

    async getIssueSummary(IterationInstance) {
        const IssuePropsPage = new IssueProperitiesPage(IterationInstance.KeepPage);
        return await IssuePropsPage.getSummary(IterationInstance);
    }

    async deleteIssue(IterationInstance) {
        const IssuePropsPage = new IssueProperitiesPage(IterationInstance.KeepPage);
        await IssuePropsPage.clickDelete(IterationInstance);
        await IssuePropsPage.clickConfirmDelete(IterationInstance);
    }
}
module.exports.IssueProperitiesLib = IssueProperitiesLib;