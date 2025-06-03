
describe('',()=>{
    beforeEach(()=>{
       cy.visit('https://www.coursera.org/search?query=Web%20Development');
       cy.contains('button span','Filters').should('be.visible').click({force:true})
       cy.contains('button span','Language').should('be.visible').click({force:true})
       cy.contains('span','English',{matchCase:false}).click({force:true})
       cy.contains('button span','Language').should('be.visible').click({force:true})
       cy.contains('button span','Level').should('be.visible').click({force:true})
       cy.contains('span','Beginner',{matchCase:false}).click({force:true})
       cy.contains('button span','Apply').should('be.visible').click({force:true})
    })
    
    it('TS05',()=>{
       cy.get('[data-track-component="search_card"]').should('be.visible')
       cy.get('.cds-CommonCard-metadata p').invoke('text').then((level)=>{
        expect(level.split(" ")[0]).equal("Beginner");
       })
    })
    
    it('TS06',()=>{
        cy.pause()
       cy.get('#searchResults ul li').then((list)=>{
        list=list.toArray().slice(0,2);
        list.forEach((li)=>{
            cy.wrap(li).find('a h3').invoke('text').then((title)=>cy.log(title))
        })
       
       })
     })
     it('TS_07',()=>{
        cy.pause()
        cy.get('#searchResults ul li').then((list)=>{
            list=list.toArray().slice(0,2);
            list.forEach((li)=>{
                cy.wrap(li).find('.cds-CommonCard-metadata').invoke('text').then((title)=>cy.log(title.split('·')[2]))
            })
           })
     })
     it('TS_08',()=>{
        cy.pause()
        cy.get('#searchResults ul li').then((list)=>{
            list=list.toArray().slice(0,2);
            list.forEach((li)=>{
                cy.wrap(li).find('[aria-label="Rating"]').invoke('text').then((title)=>cy.log(title))

            })
           })
     })
    Cypress.on('uncaught:exception',(err,run)=>{
        return false;
    })
})