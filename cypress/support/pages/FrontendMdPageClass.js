const frontendMdPageUrl = `${Cypress.env('hahow_recruit_url')}/blob/master/frontend.md`
const wireframePictures = [
    'img[src="/hahow/hahow-recruit/raw/master/assets/hero-list-page.png"]',
    'img[src="/hahow/hahow-recruit/raw/master/assets/hero-profile-page.png"]'
]

export class FrontendMdPage {
    goToFrontendMdPage() {
        cy.visit(frontendMdPageUrl)
    }
    verifyWireframePictures() {
        wireframePictures.forEach(function(element) {
            cy.get(element).should('be.visible')
        })
    }
}
export const frontendMdPage = new FrontendMdPage()