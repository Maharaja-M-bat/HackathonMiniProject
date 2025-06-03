import CourseListingPage from "../support/Pages/CourseListingPage"
import HomePage from "../support/Pages/HomePage";
const courselistingpage = new CourseListingPage;
const homepage = new HomePage;
describe("filter function",()=>{
    it("TS_04",()=>{
        homepage.Nav()
        homepage.Typing()
        courselistingpage.filter()
    })



    
  Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    
})