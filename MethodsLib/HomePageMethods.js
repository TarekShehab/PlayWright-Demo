const { HomePage } = require('../Pages/HomePage.js');
const { BaseClass } = require('./Base');


class HomePageLib extends BaseClass
{
    constructor()
    {
        super();
    }

    async VerifyProjectName(IterationInstance)
    {
        const homepage = new HomePage(IterationInstance.KeepPage);
        return await homepage.GetProjectName(IterationInstance);
    }

    async VerifyProjectCategory(IterationInstance)
    {
        const homepage = new HomePage(IterationInstance.KeepPage);
        return await homepage.GetProjectCategory(IterationInstance);
    }

    async ClickProjectSettings(IterationInstance)
    {
        const homepage = new HomePage(IterationInstance.KeepPage);
        await homepage.ClickProjecttSettingsTab();
    }
    
    async ClickCreateButton(IterationInstance)
    {
        const homepage = new HomePage(IterationInstance.KeepPage);
        await homepage.ClickOnCreateButton();
        await this.delay(500);
    }

    async VerifyIssueName(IterationInstance)
    {
       await IterationInstance.delay(1000);
       const homepage = new HomePage(IterationInstance.KeepPage);
       let result= await homepage.GetCreatedIssueName();
       return result;
    }

    async SearchForCreatedIssue(IterationInstance)
    {
        const homepage = new HomePage(IterationInstance.KeepPage);
        await homepage.TypeIssueNameonSearch(IterationInstance.Summary);
        await this.delay(1000);
    }

    // New Methods

    async getBoardSummaries(IterationInstance) {
        const homepage = new HomePage(IterationInstance.KeepPage);
        const summaries = await homepage.getAllSummaries;
        return summaries;
    }

    async getFirstIssueSummary(IterationInstance, column) {
        const homepage = new HomePage(IterationInstance.KeepPage);
        const firstSummary = await homepage.getFristSummary(column);
        return firstSummary;
    }
}
module.exports.HomePageLib = HomePageLib