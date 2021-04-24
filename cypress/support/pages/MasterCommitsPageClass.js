const masterCommitsPageUrl = `${Cypress.env('hahow_recruit_url')}/commits/master`
const commitAuthorNames = 'a[class="commit-author user-mention"]'

export class MasterCommitsPage {
    goToMasterCommitsPage() {
        cy.visit(masterCommitsPageUrl)
    }
    verifyLatestCommitAuthor() {
        cy.get(commitAuthorNames).first().then(function(element) {
            cy.log(`The latest commit author is ${element.text()}`)
        })
    }
}
export const masterCommitsPage = new MasterCommitsPage()