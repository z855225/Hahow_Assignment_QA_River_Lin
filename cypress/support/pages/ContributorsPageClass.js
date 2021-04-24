const contributorsPageUrl = `${Cypress.env('hahow_recruit_url')}/graphs/contributors`
const contributors = '#contributors > ol > li'

export class ContributorsPage {
    goToContributorsPage() {
        cy.visit(contributorsPageUrl)
    }
    getContributors() {
        cy.get(contributors).then(function(element) {
            cy.log(`${element.length} contributors`)
            for(let i = 1; i <= element.length; i++) {
                cy.get(`${contributors}:nth-child(${i}) > span > h3 > a.text-normal`).then(function(element) {
                    cy.log(element.text())
               })
            }
       })
    }
}
export const contributorsPage = new ContributorsPage()