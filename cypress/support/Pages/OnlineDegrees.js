
class Degree{
    visit(){
        cy.visit('https://www.coursera.org/degrees')
    }
    setProgramLevel(){
        cy.wait(4000)
        cy.contains('button span','Program Level',{matchCase:false}).should('be.visible').click({force:true})  
        

         cy.get('.cds-multiSelectOption-container').should('be.visible').first().click()
    }
    clickApply(){
        cy.get('.cds-149.cds-button-disableElevation.cds-button-primary.css-heizbm').should('be.visible').click({force:true})
    }
    checkUrl(){
        cy.url().should('contain','degrees')
    }
    setSubject(){
        cy.wait(50000)
        cy.get('.cds-9.css-1fynwsy.cds-10.cds-16.cds-29').should('be.visible').contains('Subject').click()
        cy.wait(12000)
        cy.get('.css-j04h6c').should('be.visible').contains('Data Science').click()
    }
    checkData(){
        cy.get('.cds-CommonCard-title.css-6ecy9b').first().should('include.text', 'Data Science');
    }
    checkbach(){
        cy.wait(10000)
        cy.get('.cds-CommonCard-title.css-6ecy9b').first().should('include.text','Bachelor')
    }
    checkmaster(){
       cy.get('.cds-CommonCard-title.css-6ecy9b').eq(3).should('include.text','Master')
    }

    
}
export {Degree}



