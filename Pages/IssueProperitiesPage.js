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
    statusDropdownLoacator = "div.kvGNcT"
    //Status Buttons ocators
    selectedForDevelopmentButtonLocator = "div.hrbdOS"
    inProgressButtonLocator = "div.guTdvC"
    doneButtonLocator = "div.iXQwlr"

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

    async clickStatusDropdown() {
        await this.page.waitForSelector(this.statusDropdownLoacator,{timeout: 10000},{visible: true});
        await this.page.click(this.statusDropdownLoacator,{waitUntil: 'domcontentloaded'})
    }
    
    async chooseStatus(status) {
        let statusButton
        switch(status){
            case "SELECTED FOR DEPLOYEMET":
                statusButton = this.selectedForDevelopmentButtonLocator
                break
            case "IN PROGRESS":
                statusButton = this.inProgressButtonLocator
                break
            case "DONE":
                statusButton = this.doneButtonLocator
                break
        }
        await this.page.waitForSelector(statusButton,{timeout: 10000},{visible: true});
        await this.page.click(statusButton,{waitUntil: 'domcontentloaded'})    
    }

}
module.exports.IssueProperitiesPage = IssueProperitiesPage;
