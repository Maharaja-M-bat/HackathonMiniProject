import CourseListingPage from "../support/Pages/CourseListingPage"
import HomePage from "../support/Pages/HomePage";
const courselistingpage = new CourseListingPage;
const homepage = new HomePage;
describe("filter function",()=>{
    beforeEach(()=>{
        homepage.Nav()
        homepage.Typing()
    })
    it("TS_04",()=>{
       
        courselistingpage.filter()
    })
    it("TS_05,TS_06,TS_07,TS_08",()=>{
       
        courselistingpage.courselist();
    
    })


    
  Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    
})