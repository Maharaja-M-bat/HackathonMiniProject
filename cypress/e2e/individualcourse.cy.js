import HomePage from "../support/Pages/HomePage";
import { courseraPage, courseDetailsPage } from '../support/Pages/IndividualCourse';

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
});