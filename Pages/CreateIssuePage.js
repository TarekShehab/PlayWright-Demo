const playwright = require('playwright');

class CreateIssuePage
{
    constructor(page)
    {
        this.page = page;
    }

    Summarylocator = 'input[name="title"]';
    SubmitButtonlocator = 'button[type="submit"]';
    DescriptionLocator = '//*[@class="ql-editor ql-blank"]';

    async SelectIssueType(issuetype)
    {
        await this.page.waitForSelector('[data-testid="select:type"]');
        await this.page.click('[data-testid="select:type"]');
        await this.page.click(`[data-testid="select-option:${issuetype}"]`,{timeout: 10000},{visible: true});
    }

    async SelectReporter(reporter)
    {
        await this.page.waitForSelector('[data-testid="select:reporterId"]');
        await this.page.click('[data-testid="select:reporterId"]');
        await this.page.click('[placeholder="Search"]');
        await this.page.click(`[data-testid="select-option:${reporter}"]`,{timeout: 10000},{visible: true});
    }

    async SelectAssignee(assignee)
    {
        await this.page.waitForSelector('[data-testid="select:userIds"]');
        await this.page.click('[data-testid="select:userIds"]');
        await this.page.click(`[data-testid="select-option:${assignee}"]`,{timeout: 10000},{visible: true});
   }

    async SelectPriority(priority)
    {
        await this.page.waitForSelector('[data-testid="select:priority"]');
        await this.page.click('[data-testid="select:priority"]');
        await this.page.click(`[data-testid="select-option:${priority}"]`,{timeout: 10000},{visible: true});
    }

    async TypeDescription(discription)
    {
        await this.page.waitForSelector(this.DescriptionLocator,{timeout: 10000},{visible: true});
        await this.page.click(this.DescriptionLocator);
        await this.page.fill(this.DescriptionLocator, discription);
    }


    async TypeSummary(summary)
    {
        await this.page.waitForSelector(this.Summarylocator,{timeout: 10000},{visible: true});
        await this.page.click(this.Summarylocator);
        await this.page.fill(this.Summarylocator, summary);
    }

    async Clicksubmit()
    {
        await this.page.waitForSelector(this.SubmitButtonlocator,{timeout: 10000},{visible: true});
        await this.page.click(this.SubmitButtonlocator);
    }

}
module.exports.CreateIssuePage = CreateIssuePage