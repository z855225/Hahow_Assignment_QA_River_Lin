export class MasterCommitsPage {
    goToMasterCommitsPage() {
        cy.visit('https://github.com/hahow/hahow-recruit/commits/master')
    }
    verifyLatestCommitAuthor() {
        cy.get('a[class="commit-author user-mention"]').first().then(function(element) {
            cy.log(`The latest commit author is ${element.text()}`)
        })
    }
}
export const masterCommitsPage = new MasterCommitsPage()