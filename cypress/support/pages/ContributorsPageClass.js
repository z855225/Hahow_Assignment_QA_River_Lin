export class ContributorsPage {
    goToContributorsPage() {
        cy.visit('https://github.com/hahow/hahow-recruit/graphs/contributors')
    }
    getContributors() {
        cy.get('#contributors > ol > li').then(function(element) {
            cy.log(`${element.length} contributors`)
            for(let i = 1; i <= element.length; i++) {
                cy.get(`#contributors > ol > li:nth-child(${i}) > span > h3 > a.text-normal`).then(function(element) {
                    cy.log(element.text())
               })
            }
       })
    }
}
export const contributorsPage = new ContributorsPage()