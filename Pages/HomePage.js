const playwright = require('playwright');


class HomePage
{
    constructor(page)
    {
        this.page = page;
    }

    createIssueButtonLocator = '[data-testid="icon:plus"]';
    TheCreatedIssueLocator=  '(//*[@class="sc-kfGgVZ duybNU"])[1]';
    searchbarLocator = 'input';
    projectSettingsTab = 'text=Project settings';
    projectName = '//*[@class="sc-feJyhm jwrhXI"]';
    projectCategory = '//*[@class="sc-iELTvK fFTIzJ"]'; 

    // New Locators
    SummariesLocator = 'p'

    async ClickOnTheIssueCreated()
    {
        await this.page.waitForSelector(this.TheCreatedIssueLocator,{timeout: 10000},{visible: true});
        await this.page.click(this.TheCreatedIssueLocator,{waitUntil: 'domcontentloaded'});
    }

    async GetProjectName()
    {
        await this.page.waitForSelector(this.projectName,{timeout: 10000},{visible: true});
        return await this.page.innerText(this.projectName,{waitUntil: 'domcontentloaded'});
    }

    async GetProjectCategory()
    {
        await this.page.waitForSelector(this.projectCategory,{timeout: 10000},{visible: true});
        return await this.page.innerText(this.projectCategory,{waitUntil: 'domcontentloaded'});
    }

    async ClickProjecttSettingsTab()
    {
        await this.page.waitForSelector(this.projectSettingsTab,{timeout: 10000},{visible: true});
        await this.page.click(this.projectSettingsTab,{waitUntil: 'domcontentloaded'});
    }
    
    async ClickOnCreateButton()
    {
        await this.page.waitForSelector(this.createIssueButtonLocator,{timeout: 10000},{visible: true});
        await this.page.click(this.createIssueButtonLocator,{waitUntil: 'domcontentloaded'})
    }

    async GetCreatedIssueName()
    {
        await this.page.waitForSelector(this.TheCreatedIssueLocator,{timeout: 10000},{visible: true});
        return  await this.page.innerText(this.TheCreatedIssueLocator)
    }

    async TypeIssueNameonSearch(name)
    {
        await this.page.waitForSelector(this.searchbarLocator,{timeout: 10000},{visible: true});
        await this.page.click(this.searchbarLocator);
        await this.page.fill(this.searchbarLocator,name);
    }

    // New Methods

    async getAllSummaries()
    {
        let summariesParagraphs = await this.page.waitForSelector(this.SummariesLocator,{timeout: 10000},{visible: true});
        let summaries = summariesParagraphs.map(p => {
            await this.page.innerText(p)
        })
        return summaries
    }
}
module.exports.HomePage = HomePage;
