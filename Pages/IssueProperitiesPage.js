const playwright = require('playwright');

class IssueProperitiesPage {
    
    constructor(page) {
        this.page = page;
    }

    // Added Locators & Methods 

    summaryTexareaLocator = "textarea";
    deleteButtonLocator = "i.dizDXb";
    confirmDeleteButtonLocator = "button.dIxFno";
    statusDropdownLoacator = "div.kvGNcT";
    commentInputLocator = "textarea[placeholder='Add a comment...']";
    saveCommentButtonLocator = "button.dIxFno";
    commentsLocator = "p.cYOpjs";
    firstDeleteButtonLocator = "//body/div[@id='root']/div[3]/div[1]/div[1]/div[2]/div[1]/div[4]/div[3]/div[2]/div[4]";
    firstEditButtonLocator = "//body/div[@id='root']/div[3]/div[1]/div[1]/div[2]/div[1]/div[4]/div[3]/div[2]/div[3]";
    commentSaveButtonLocator = "button.dIxFno";
    //Status Buttons Locators
    selectedForDevelopmentButtonLocator = "div.hrbdOS";
    inProgressButtonLocator = "div.guTdvC";
    doneButtonLocator = "div.iXQwlr";

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

    async addComment(comment) {
        await this.page.waitForSelector(this.commentInputLocator,{timeout: 10000},{visible: true});
        await this.page.click(this.commentInputLocator);
        await this.page.fill(this.commentInputLocator, comment);
        
        await this.page.click(this.saveCommentButtonLocator);
    }

    async getAllComments() {
        let commentsParagraphs = await this.page.$$(this.commentsLocator)
        let comments
        for(let p of commentsParagraphs){
            comments.push(p.text)
        }
        return comments
    }

    async deleteLastComment() {
        await this.page.waitForSelector(this.firstDeleteButtonLocator,{timeout: 10000},{visible: true});
        await this.page.click(this.firstDeleteButtonLocator);
    }

    async editLastComment(updatedComment) {
        // Press edit button
        await this.page.waitForSelector(this.firstEditButtonLocator,{timeout: 10000},{visible: true});
        await this.page.click(this.firstEditButtonLocator);
        
        // Type new comment
        await this.page.waitForSelector(this.commentInputLocator,{timeout: 10000},{visible: true});
        await this.page.fill(this.commentInputLocator, updatedComment);
        
        // Press save button
        await this.page.waitForSelector(this.commentSaveButtonLocator,{timeout: 10000},{visible: true});
        await this.page.click(this.commentSaveButtonLocator);
    }

}

module.exports.IssueProperitiesPage = IssueProperitiesPage;
