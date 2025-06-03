class CourseListingPage {

filter(){
    cy.get('.css-h4ov36').click({multiple:true});
   // cy.contains('Filters').click({force:true})
   cy.get('#main').find('[data-testid="accordion-item"]').eq(1).click();

   cy.contains('label', 'English')
     .find('input[type="checkbox"]')
     .check({force:true});
   cy.get('#main').find('[data-testid="accordion-item"]').eq(3).click();

   
   cy.contains('label', 'Beginner')
     .find('input[type="checkbox"]')
     .check({force:true});

   cy.get('.cds-button-primary').click()
   cy.get('.css-h4ov36').click()
   cy.get('.css-a58e5p > .cds-button-secondary').click({force:true})
   cy.get('.css-1flkdcs > .cds-197 > .cds-button-label').click()
   cy.get('.css-h4ov36 > .cds-button-label').invoke("text").then((element)=>{
    expect(element).equal("Filters")
   })

   //cy.get('#main').find('[data-testid="accordion-item"]').eq(3).click();

   //cy.get('#cds-react-aria8138768039-\:r16\:-accordion-header > .cds-AccordionHeader-content > .cds-AccordionHeader-labelGroup > .css-6ecy9b').select("English")
}


}
export default CourseListingPage