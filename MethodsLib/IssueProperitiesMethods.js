const { BaseClass } = require('./Base');
const { IssueProperitiesPage } = require('../Pages/IssueProperitiesPage');

class IssueProperitiesLib extends BaseClass {
    
    constructor() {
        super();
    }

    // Added Methods

    async getIssueSummary(IterationInstance) {
        const IssuePropsPage = new IssueProperitiesPage(IterationInstance.KeepPage);
        return await IssuePropsPage.getSummary(IterationInstance);
    }

    async deleteIssue(IterationInstance) {
        const IssuePropsPage = new IssueProperitiesPage(IterationInstance.KeepPage);
        await IssuePropsPage.clickDelete(IterationInstance);
        await IssuePropsPage.clickConfirmDelete(IterationInstance);
    }

    async changeStatus(IterationInstance, status) {
        const IssuePropsPage = new IssueProperitiesPage(IterationInstance.KeepPage);
        await IssuePropsPage.clickStatusDropdown(IterationInstance)
        await IssuePropsPage.chooseStatus(IterationInstance, status)
    }

    async addIssueComment(IterationInstance, comment) {
        const IssuePropsPage = new IssueProperitiesPage(IterationInstance.KeepPage);
        await IssuePropsPage.addComment(comment)      
    }
    
    async getComments(IterationInstance) {
        const IssuePropsPage = new IssueProperitiesPage(IterationInstance.KeepPage);
        await IssuePropsPage.getAllComments()
    }
    
    async deleteAddedComment(IterationInstance) {
        const IssuePropsPage = new IssueProperitiesPage(IterationInstance.KeepPage);
        await IssuePropsPage.deleteLastComment()
    }
    
    async editComment(IterationInstance, updatedComment) {
        const IssuePropsPage = new IssueProperitiesPage(IterationInstance.KeepPage);
        await IssuePropsPage.editLastComment(updatedComment);
    }
    
    async getLastComment(IterationInstance) {
        const IssuePropsPage = new IssueProperitiesPage(IterationInstance.KeepPage);
        const comments = await IssuePropsPage.getAllComments();
        const lastComment= comments[0] //the first comment shown in the issue
        return lastComment
    }
}

module.exports.IssueProperitiesLib = IssueProperitiesLib;