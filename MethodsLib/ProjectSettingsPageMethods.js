const { BaseClass } = require('./Base');
const { ProjectSettingsPage } = require('../Pages/ProjectSettingsPage.js');


class ProjectSettingsLib extends BaseClass
{
    constructor()
    {
        super();
    }


    async GetVerificationText(IterationInstance)
    {
        const ProjectSettings = new ProjectSettingsPage(IterationInstance.KeepPage)
        return await ProjectSettings.VerifyText();
    }

    async InsertDataInSettings(IterationInstance)
    {
        const ProjectSettings = new ProjectSettingsPage(IterationInstance.KeepPage);
       await ProjectSettings.SelectCategoryAndName(IterationInstance.name,IterationInstance.category);
       await this.delay(8000);
    }

}
module.exports.ProjectSettingsLib = ProjectSettingsLib