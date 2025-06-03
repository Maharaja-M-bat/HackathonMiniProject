import CourseListingPage from "../support/Pages/CourseListingPage"
import HomePage from "../support/Pages/HomePage";
const cl = new CourseListingPage();
const homepage = new HomePage();
describe("filter function",()=>{
    beforeEach(()=>{
        homepage.Nav()
        homepage.Typing()
    })
    it("TS_04",()=>{
        cl.filter()
    })
    it("TS_05",()=>{
       cl.clickFilter();
       cl.clickLanguage();
       cl.selectLanguage("language")
       cl.clickLanguage()
       cl.clickLevel()
       cl.selectLevel();
       cl.clickLevel();
       cl.ApplyFilter();
       cl.checkResultLevel();
    })
    it("TS_06",()=>{
        cl.clickFilter();
        cl.clickLanguage();
        cl.selectLanguage("language")
        cl.clickLanguage()
        cl.clickLevel()
        cl.selectLevel();
        cl.clickLevel();
        cl.ApplyFilter();
        cl.showTitle(2);
    })
    it("TS_07",()=>{
        cl.clickFilter();
        cl.clickLanguage();
        cl.selectLanguage("language")
        cl.clickLanguage()
        cl.clickLevel()
        cl.selectLevel();
        cl.clickLevel();
        cl.ApplyFilter();
        cl.showCoursePeriod(2);
    })
    it("TS_08",()=>{
        cl.clickFilter();
        cl.clickLanguage();
        cl.selectLanguage("language")
        cl.clickLanguage()
        cl.clickLevel()
        cl.selectLevel();
        cl.clickLevel();
        cl.ApplyFilter();
        cl.showRating(2);
    })
    it('TS_09',()=>{
        cl.clickFilter();
        cl.clickLanguage();
        cl.clickshowMore(9)
        cl.selectLanguage("rarelanguage")
        cl.clickLanguage()
        cl.clickLevel()
        cl.verifyLevel()
    })


    
  Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    
})