import enterprise from "../../fixtures/enterprise.json";
class EnterPrisePage{
    visit(){
        cy.visit("https://www.coursera.org/");
    }
    urlCheck(){
        cy.get('.rc-SeoGlobalFooter__content.lohp-rebrand> div:nth-child(5) ul li:nth-child(10) a').should("be.visible").click();
        cy.url().should("include","/business");
    }
    formWithValidInput(){
        cy.get('.rc-SeoGlobalFooter__content.lohp-rebrand> div:nth-child(5) ul li:nth-child(10) a').should("be.visible").click();
        cy.get('#FirstName').should("be.visible");
        cy.get('#FirstName').type(`${enterprise.firstName}`);
        cy.get('#LastName').type(`${enterprise.lastName}`);
        cy.get('#Email').type(`${enterprise.email}`);
        cy.get('#Phone').type(`${enterprise.phone}`);
        cy.get('#rentalField9').select(`${enterprise.rentalField}`);
        cy.get('#Title').type(`${enterprise.title}`);
        cy.get('#Company').type(`${enterprise.company}`);
        cy.get('#Employee_Range__c').select(`${enterprise.employeeRange}`);
        cy.get('#What_the_lead_asked_for_on_the_website__c').select(`${enterprise.leadRequest}`);
        cy.get('#Self_reported_employees_to_buy_for__c').select(`${enterprise.employeesToBuyFor}`);
        cy.get("#Country").select(`${enterprise.country}`);
     //   cy.get('#State').select(`${enterprise.state}`);
        cy.get('.mktoButton').click();
        cy.wait(90000);
        cy.get('[data-testid="how_module_hero_heading"]').should('be.visible').then((text)=>{
           cy.wrap(text.text()).should('eq',`${enterprise.Confirmation_Msg}`);
        })
       
    }
    formWithoutName(){
        cy.get('.rc-SeoGlobalFooter__content.lohp-rebrand> div:nth-child(5) ul li:nth-child(10) a').should("be.visible").click();
        cy.get('#FirstName').should("be.visible");
        cy.get('#Email').type(`${enterprise.email}`);
        cy.get('#Phone').type(`${enterprise.phone}`);
        cy.get('#rentalField9').select(`${enterprise.rentalField}`);
        cy.get('#Title').type(`${enterprise.title}`);
        cy.get('#Company').type(`${enterprise.company}`);
        cy.get('#Employee_Range__c').select(`${enterprise.employeeRange}`);
        cy.get('#What_the_lead_asked_for_on_the_website__c').select(`${enterprise.leadRequest}`);
        cy.get('#Self_reported_employees_to_buy_for__c').select(`${enterprise.employeesToBuyFor}`);
        cy.get("#Country").select(`${enterprise.country}`);
        cy.get('#State').select(`${enterprise.state}`);
        cy.get('.mktoButton').click();
        cy.get('#ValidMsgFirstName').should("be.visible").then((val)=>{
            const err=val.text();
            cy.log(err);
            cy.wrap(err).should("eq",`${enterprise.erroeMsgForName}`);
        })
    }
    formWithoutOrganizationType(){
        cy.get('.rc-SeoGlobalFooter__content.lohp-rebrand> div:nth-child(5) ul li:nth-child(10) a').should("be.visible").click();
        cy.get('#FirstName').should("be.visible");
        cy.get('#FirstName').type(`${enterprise.firstName}`);
        cy.get('#LastName').type(`${enterprise.lastName}`);
        cy.get('#Email').type(`${enterprise.email}`);
        cy.get('#Phone').type(`${enterprise.phone}`);
        // cy.get('#rentalField9').select(`${enterprise.rentalField}`);
        // cy.get('#Title').type(`${enterprise.title}`);
        cy.get('#Company').type(`${enterprise.company}`);
        cy.get('#Employee_Range__c').select(`${enterprise.employeeRange}`);
        // cy.get('#What_the_lead_asked_for_on_the_website__c').select(`${enterprise.leadRequest}`);
        // cy.get('#Self_reported_employees_to_buy_for__c').select(`${enterprise.employeesToBuyFor}`);
        cy.get("#Country").select(`${enterprise.country}`);
        cy.get('#State').select(`${enterprise.state}`);
        cy.get('.mktoButton').click();
        cy.get('#ValidMsgrentalField9').should("be.visible").then((val)=>{
            const err=val.text();
            cy.log(err);
            cy.wrap(err).should("eq",`${enterprise.errorMsgForOrganization}`);
        })
    }
    formWithInvalidEmail(){
        cy.get('.rc-SeoGlobalFooter__content.lohp-rebrand> div:nth-child(5) ul li:nth-child(10) a').should("be.visible").click();
        cy.get('#FirstName').should("be.visible");
        cy.get('#FirstName').type(`${enterprise.firstName}`);
        cy.get('#LastName').type(`${enterprise.lastName}`);
        cy.get('#Email').type(`${enterprise.Inalid_email}`);
        cy.get('#Phone').type(`${enterprise.phone}`);
        cy.get('#rentalField9').select(`${enterprise.rentalField}`);
        cy.get('#Title').type(`${enterprise.title}`);
        cy.get('#Company').type(`${enterprise.company}`);
        cy.get('#Employee_Range__c').select(`${enterprise.employeeRange}`);
        cy.get('#What_the_lead_asked_for_on_the_website__c').select(`${enterprise.leadRequest}`);
        cy.get('#Self_reported_employees_to_buy_for__c').select(`${enterprise.employeesToBuyFor}`);
        cy.get("#Country").select(`${enterprise.country}`);
        cy.get('#State').select(`${enterprise.state}`);
        cy.get('.mktoButton').click();
        cy.wait(25000)
        cy.get('#ValidMsgEmail').should("be.visible").then((val)=>{
            const err=val.text();
            cy.log(err);
            cy.wrap(err).should("eq",`${enterprise.errorMsgForEmail}`);
        })
    }
}
export default EnterPrisePage;