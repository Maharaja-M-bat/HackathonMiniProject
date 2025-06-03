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

clickFilter(){
    cy.contains('button span','Filters').should('be.visible').click({force:true})
}
clickLanguage(){
    cy.contains('button span','Language').should('be.visible').click({force:true})
}
selectLanguage(lan){
    cy.contains('span',lan,{matchCase:false}).click({force:true})
}
clickLevel(){
    cy.contains('button span','Level').should('be.visible').click({force:true})
}
selectLevel(lev){
    cy.contains('span',lev,{matchCase:false}).click({force:true})
}
ApplyFilter(){
    cy.contains('button span','Apply').should('be.visible').click({force:true})
}
checkResultLevel(level){
    cy.get('[data-track-component="search_card"]').should('be.visible')
    cy.get('.cds-CommonCard-metadata p').invoke('text').then((lev)=>{
       expect(lev.split(" ")[0]).equal(level);
    })
}
showTitle(num){
    if(num>=0 && num<=12){
        cy.get('#searchResults ul li').then((list)=>{
            list=list.toArray().slice(0,num);
            list.forEach((li)=>{
                cy.wrap(li).find('a h3').invoke('text').then((title)=>cy.log(title))
            })      
           })
    }
    else{
        cy.log('Enter Index less than 12')
    }
}
showCoursePeriod(num){
    cy.get('#searchResults ul li').then((list)=>{
        list=list.toArray().slice(0,num);
        list.forEach((li)=>{
            cy.wrap(li).find('.cds-CommonCard-metadata').invoke('text').then((Period)=>cy.log(Period.split('·')[2]))
        })
       })
}
showRating(num){
    cy.get('#searchResults ul li').then((list)=>{
        list=list.toArray().slice(0,num);
        list.forEach((li)=>{
            cy.wrap(li).find('[aria-label="Rating"]').invoke('text').then((rating)=>cy.log(rating))
        })
       })
}
clickshowMore(num){
    for(let i=0;i<num;i++){
     cy.contains('button',"show more",{matchCase:false}).invoke('css','visibility','visible').click({force:true});
    }
}
verifyLevel(level){
   cy.get(`[data-testid="productDifficultyLevel:${level}-false"]`).should('not.exist');
}

}
export default CourseListingPage