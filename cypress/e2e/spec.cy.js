import HomePage from "../support/Pages/HomePage";
import { courseraPage, courseDetailsPage } from '../support/Pages/IndividualCourse';
import CourseListingPage from "../support/Pages/CourseListingPage"
import EnterPrisePage from "../support/Pages/EnterprisePage"
import { Degree } from "../support/Pages/OnlineDegrees";

describe("SID_01",()=>{
    const homepage = new HomePage;
    
    it("Visiting and type with valid data",()=>{
      homepage.Nav()
      homepage.Typing()
    })
    
    it("Visiting and type with Invalid data",()=>{
        homepage.Nav()
        homepage.invalidType()
      })
    
    Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
    });
})

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

describe('TS_04', () => {
    const homepage = new HomePage;
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        homepage.Nav();
        homepage.Typing();
        courseraPage.clickFirstCourseCard();
    });

    it('TC_15 - Verify Course Details Page URL and Title', () => {

        courseDetailsPage.verifyUrl('https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer');
        courseDetailsPage.verifyCourseTitleVisibility();
    });

    it('TC_16 - Verify Modules and Skills on Course Details Page', () => {

        courseDetailsPage.logNumberOfModules();
        courseDetailsPage.clickModulesLink();
        courseDetailsPage.logModuleHeadings();
        courseDetailsPage.logSkillsGained();
        courseDetailsPage.careerinsights();
    });
     
    it('TC_17 - Verify Modules and Career Insights',()=>{
        courseDetailsPage.verifyCourseSeries();
        courseDetailsPage.verifyCareerInsights();
        
    })
});

describe('OnlineDegree', () => {
    let degree,home;
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        degree=new Degree();
        home=new HomePage();
        degree.visit()

    });

    it('TC18', () => {
        degree.setProgramLevel();
        degree.clickApply();
        degree.checkUrl();
    });
    it('TC19',()=>{
        degree.setProgramLevel();
        degree.clickApply();
        degree.setSubject()
        degree.clickApply();
        degree.checkData()
    })
    it('TC20',()=>{
        degree.setSubject()
        degree.clickApply();

        degree.checkbach()
        degree.checkmaster()
        
    })
});

