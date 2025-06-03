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



courselist(){
       
     
     
     
        //cy.visit('https://www.coursera.org/search?query=Web%20Development');
        cy.contains('button span','Filters').should('be.visible').click({force:true})
        cy.contains('button span','Language').should('be.visible').click({force:true})
        cy.contains('span','English',{matchCase:false}).click({force:true})
        cy.contains('button span','Language').should('be.visible').click({force:true})
        cy.contains('button span','Level').should('be.visible').click({force:true})
        cy.contains('span','Beginner',{matchCase:false}).click({force:true})
        cy.contains('button span','Apply').should('be.visible').click({force:true})
        cy.get('[data-track-component="search_card"]').should('be.visible')
        cy.get('.cds-CommonCard-metadata p').invoke('text').then((level)=>{
         expect(level.split(" ")[0]).equal("Beginner");
        })
    
     
   
       // cy.visit('https://www.coursera.org/search?query=Web%20Development');
        
        cy.get('#searchResults ul li').then((list)=>{
         list=list.toArray().slice(0,2);
         list.forEach((li)=>{
             cy.wrap(li).find('a h3').invoke('text').then((title)=>cy.log(title))
         })
        
        })
      
 
        //cy.visit('https://www.coursera.org/search?query=Web%20Development');
        
         cy.get('#searchResults ul li').then((list)=>{
             list=list.toArray().slice(0,2);
             list.forEach((li)=>{
                 cy.wrap(li).find('.cds-CommonCard-metadata').invoke('text').then((title)=>cy.log(title.split('·')[2]))
             })
            })
      
    
       // cy.visit('https://www.coursera.org/search?query=Web%20Development');
       
         cy.get('#searchResults ul li').then((list)=>{
             list=list.toArray().slice(0,2);
             list.forEach((li)=>{
                 cy.wrap(li).find('[aria-label="Rating"]').invoke('text').then((title)=>cy.log(title))
 
             })
            })
   
 
 
}


}
export default CourseListingPage