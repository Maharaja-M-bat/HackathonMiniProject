import homedata from "../../fixtures/homedata.json";
class HomePage{

    Nav(){
        cy.visiting();
    }

    Typing(){
        cy.get('#search-autocomplete-input').type(`${homedata.searchcourse}{enter}`,{force:true})
    }

    invalidType(){
        cy.get('#search-autocomplete-input').type(`${homedata.Invalid}{enter}`,{force:true})
    }

    urlcheck(){
          cy.url().should('include', 'coursera');
    }


    }

    export default HomePage; 

