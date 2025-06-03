import CourseListingPage from "../support/Pages/CourseListingPage"
import HomePage from "../support/Pages/HomePage";
const cl = new CourseListingPage();
const homepage = new HomePage();
describe("filter function",()=>{
    let data;
    beforeEach(()=>{
        homepage.Nav()
        homepage.Typing()
        cy.fixture('courselisting').then((d)=>{
            data=d
        })
    })
    it("TS_04",()=>{
       
        cl.filter()
    })
    it("TS_05",()=>{
       cl.clickFilter();
       cl.clickLanguage();
       cl.selectLanguage(data.language)
       cl.clickLanguage()
       cl.clickLevel()
       cl.selectLevel(data.level);
       cl.clickLevel();
       cl.ApplyFilter();
       cl.checkResultLevel(data.level);
    })
    it("TS_06",()=>{
        cl.clickFilter();
        cl.clickLanguage();
        cl.selectLanguage(data.language)
        cl.clickLanguage()
        cl.clickLevel()
        cl.selectLevel(data.level);
        cl.clickLevel();
        cl.ApplyFilter();
        cl.showTitle(2);
    })
    it("TS_07",()=>{
        cl.clickFilter();
        cl.clickLanguage();
        cl.selectLanguage(data.language)
        cl.clickLanguage()
        cl.clickLevel()
        cl.selectLevel(data.level);
        cl.clickLevel();
        cl.ApplyFilter();
        cl.showCoursePeriod(2);
    })
    it("TS_08",()=>{
        cl.clickFilter();
        cl.clickLanguage();
        cl.selectLanguage(data.language)
        cl.clickLanguage()
        cl.clickLevel()
        cl.selectLevel(data.level);
        cl.clickLevel();
        cl.ApplyFilter();
        cl.showRating(2);
    })
    it.only('TS_09',()=>{
        cl.clickFilter();
        cl.clickLanguage();
        cl.clickshowMore(9)
        cl.selectLanguage(data.rarelanguage)
        cl.clickLanguage()
        cl.clickLevel()
        cl.verifyLevel(data.levelcheck)
    })


    
  Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    
})