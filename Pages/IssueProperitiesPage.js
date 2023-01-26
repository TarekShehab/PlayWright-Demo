const playwright = require('playwright');



class IssueProperitiesPage
{
    constructor(page)
    {
        this.page = page;
    }

    // New 

    summaryTexareaLocator = "textarea"
    deleteButtonLocator = "i.dizDXb"
    confirmDeleteButtonLocator = "button.dIxFno"

    async getSummary() {
        await this.page.waitForSelector(this.summaryTexareaLocator,{timeout: 10000},{visible: true});
        return await this.page.innerText(this.summaryTexareaLocator,{waitUntil: 'domcontentloaded'});
    }

    async clickDelete() {
        await this.page.waitForSelector(this.deleteButtonLocator,{timeout: 10000},{visible: true});
        await this.page.click(this.deleteButtonLocator,{waitUntil: 'domcontentloaded'})
    }

    async clickConfirmDelete() {
        await this.page.waitForSelector(this.confirmDeleteButtonLocator,{timeout: 10000},{visible: true});
        await this.page.click(this.confirmDeleteButtonLocator,{waitUntil: 'domcontentloaded'})
    }


}
module.exports.IssueProperitiesPage = IssueProperitiesPage;
