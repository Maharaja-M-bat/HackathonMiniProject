import EnterPrisePage from "../support/Pages/EnterprisePage"
describe("SID_03",()=>{
    const enterprisePage= new EnterPrisePage;
    it("TS10",()=>{
        enterprisePage.visit();
        enterprisePage.urlCheck();
    })
    it("TS11",()=>{
        enterprisePage.visit();
        enterprisePage.formWithValidInput();
    })
    it("TS12",()=>{
        enterprisePage.visit();
        enterprisePage.formWithoutName();
    })
    it("TS13",()=>{
        enterprisePage.visit();
        enterprisePage.formWithoutOrganizationType();
    })
    it("TS14",()=>{
        enterprisePage.visit();
        enterprisePage.formWithInvalidEmail();
    })
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false;
    });
})