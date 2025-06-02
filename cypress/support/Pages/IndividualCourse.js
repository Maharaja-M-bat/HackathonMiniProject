class CourseraPage {
    elements = {
        productCards: '.cds-ProductCard-content a',
    }

    clickFirstCourseCard() {
        cy.get(this.elements.productCards)
            .should('be.visible')
            .first()
            .invoke('removeAttr', 'target')
            .click({ force: true });
    }
}

class CourseDetailsPage {

    elements = {
        heroTitle: 'h1[data-e2e="hero-title"]',
        modulesLink: 'div[data-track-app="unified_description_page"]> a[href="#courses"]',
        moduleHeadings: '[data-test="ModuleTitle"], .rc-ModuleTitle, h3[class="cds-119 css-1pxm1ir cds-121"]',
        skillsGainedList: 'ul[class="css-yk0mzy"]',
        salary: 'div #outcomes div[class="css-ynxfsy"] > span',
        jobOpenings : 'div #outcomes div[class="css-ynxfsy"] > span'
    }

    verifyCourseTitleVisibility() {
        cy.get(this.elements.heroTitle).should('be.visible');
    }

    verifyUrl(expectedUrl) {
        cy.url().then(url => {
            expect(url).to.equal(expectedUrl);
        });
    }

    logNumberOfModules() {
        cy.get(this.elements.modulesLink)
            .first()
            .invoke('text')
            .then((val) => {
                cy.log(`No of modules: ${val}`);
            });
    }

    clickModulesLink() {
        cy.get(this.elements.modulesLink).first().click();
    }

    logModuleHeadings() {
        cy.get(this.elements.moduleHeadings)
            .each(($moduleHeading, index) => {
                const moduleText = $moduleHeading.text().trim();
                cy.log(`Module ${index + 1} Heading: ${moduleText}`);
            })
            .then(($elements) => {
                expect($elements).to.have.length.of.at.least(4);
                cy.log(`Successfully logged ${$elements.length} module headings.`);
            });
    }

    logSkillsGained() {
        cy.get(this.elements.skillsGainedList)
            //.not(':last')
            .each(($skills) => {
                const skill = $skills.text().trim();
                cy.log(`Skills gained: ${skill} `);
            });
    }

    careerinsights(){
        cy.get(this.elements.salary)
        .first()
        .invoke('text')
        .then((val) => {
            cy.log(`Salary: ${val}`);
        });

        cy.get(this.elements.jobOpenings)
        .eq(1)
        .invoke('text')
        .then((val) => {
            cy.log(`Job Openings: ${val}`);
        });

    }
}

export const courseraPage = new CourseraPage();
export const courseDetailsPage = new CourseDetailsPage();