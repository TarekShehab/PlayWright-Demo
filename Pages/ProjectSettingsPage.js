const playwright = require('playwright');



class ProjectSettingsPage
{
    constructor(page)
    {
        this.page = page;
    }

    projectDetailsText = 'h1:has-text("Project Details")';
    categoryDropDownButton = '[data-testid="select:category"]';
    nameText = 'input[name="name"]';
    saveChangesButton = 'button:has-text("Save changes")';

    //New Locators
    tabsLocator = "div.heSyuF" //Containing divs
    notImplementedDivsLocator = "div.cGkyhG"

    async VerifyText()
    {
        await this.page.waitForSelector(this.projectDetailsText,{timeout: 10000},{visible: true});
        return await this.page.innerText(this.projectDetailsText,{waitUntil: 'domcontentloaded'})
    }

    async SelectCategoryAndName(name,category)
    {
        await this.page.waitForSelector(this.nameText,{timeout: 10000},{visible: true});
        await this.page.fill(this.nameText, `${name}`);
        await this.page.waitForSelector(this.categoryDropDownButton,{timeout: 10000},{visible: true});
        await this.page.click(this.categoryDropDownButton,{timeout: 10000},{visible: true});
        await this.page.click(`[data-testid="select-option:${category}"]`,{timeout: 10000},{visible: true});
        await this.page.waitForSelector(this.saveChangesButton,{timeout: 10000},{visible: true});
        await this.page.click(this.saveChangesButton,{timeout: 10000},{visible: true});
    }

    // New methods

    // Verfy all the tabs are not implemented
    async VerifyNotImplemented()
    {
        // Get all the divs inside the tabs
        let tabs = await this.page.$$(notImplementedDivsLocator)

        // Iterate on divs to verify text in them is "Not implemented"
        for (let tab of tabs){
            if (tab.textContent() !== "Not implemented")
                return false
        }
        return true
    }

}
module.exports.ProjectSettingsPage = ProjectSettingsPage;
