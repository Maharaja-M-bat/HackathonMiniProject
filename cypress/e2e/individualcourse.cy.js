describe('TS_04',()=>{
    it('TC_15',()=>{
        cy.on('uncaught:exception',(err,runnable)=>{return false})
        // cy.visit('https://www.coursera.org/')
        // cy.get('button[aria-label="Search"]').dblclick()
        // cy.get('#search-autocomplete-input').type('Web development{enter}',{force:true})
        cy.visit('https://www.coursera.org/search?query=web%20development')
        cy.get('.cds-ProductCard-content a')
        .should('be.visible').first().invoke('removeAttr','target').click({force:true})
        cy.url().then(url=>{
            expect(url).to.equal('https://www.coursera.org/learn/introduction-html-css-javascript')
        })
        cy.get('h1[data-e2e="hero-title"]').should('be.visible')
        
    })

})