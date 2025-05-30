describe('TS_04', () => {
    it('TC_15', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        cy.visit('https://www.coursera.org/search?query=web%20development')
        cy.get('.cds-ProductCard-content a')
            .should('be.visible').first().invoke('removeAttr', 'target').click({ force: true })
        cy.url().then(url => {
            expect(url).to.equal('https://www.coursera.org/learn/introduction-html-css-javascript')
        })
        cy.get('h1[data-e2e="hero-title"]').should('be.visible')

    })
  
    it('TC_16', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        cy.visit('https://www.coursera.org/search?query=web%20development')
        cy.get('.cds-ProductCard-content a')
            .should('be.visible').first().invoke('removeAttr', 'target').click({ force: true })
        cy.get('div .css-89fcrv > a[href="#modules"]').first().as('module')
            .invoke('text').then((val) => {
                cy.log(`No of modules: ${val}`)
            })
        cy.get('@module').click()
        cy.get('[data-test="ModuleTitle"], .rc-ModuleTitle, h3[class="cds-119 css-1pxm1ir cds-121"]') 
            .each(($moduleHeading, index) => {
                const moduleText = $moduleHeading.text().trim();
                cy.log(`Module ${index + 1} Heading: ${moduleText}`);
            })
            .then(($elements) => {
                expect($elements).to.have.length.of.at.least(4);
                cy.log(`Successfully logged ${$elements.length} module headings.`);
            });
        cy.get('ul[class="css-yk0mzy"]')
        .not(':last')
        .each(($skills)=>{
            const skill=$skills.text().trim()
            cy.log(`Skills gained: ${skill} `)
        })

    })

})