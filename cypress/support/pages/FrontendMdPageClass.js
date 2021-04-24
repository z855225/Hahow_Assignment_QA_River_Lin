export class FrontendMdPage {
    goToFrontendMdPage() {
        cy.visit('https://github.com/hahow/hahow-recruit/blob/master/frontend.md')
    }
    verifyWireframePictures() {
        cy.get('img[src="/hahow/hahow-recruit/raw/master/assets/hero-list-page.png"]').should('be.visible')
        cy.get('img[src="/hahow/hahow-recruit/raw/master/assets/hero-profile-page.png"]').should('be.visible')
    }
}
export const frontendMdPage = new FrontendMdPage()