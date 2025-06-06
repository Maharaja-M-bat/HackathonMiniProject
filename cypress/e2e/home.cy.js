import HomePage from "../support/Pages/HomePage";


describe("Visiting on page",()=>{
const homepage = new HomePage;

it("Visiting and type with valid data",()=>{
  homepage.Nav()
  homepage.Typing()
})

it("Visiting and type with Invalid data",()=>{
    homepage.Nav()
    homepage.invalidType()
    homepage.urlcheck()
   
  })
   

  



  Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    


})