import { contributorsPage } from '../../support/pages/ContributorsPageClass'
import { frontendMdPage } from '../../support/pages/FrontendMdPageClass'
import { masterCommitsPage } from '../../support/pages/MasterCommitsPageClass'

describe('hahow-recruit web site test', function() {
    it('Verify contributors', function() {
        contributorsPage.goToContributorsPage()
        contributorsPage.getContributors()
    })

    it('Verify frontend.md Wireframe pictures ', function() {
        frontendMdPage.goToFrontendMdPage()
        frontendMdPage.verifyWireframePictures()
    })

    it('Verify latest commit author', function() {
        masterCommitsPage.goToMasterCommitsPage()
        masterCommitsPage.verifyLatestCommitAuthor()
    })
})