
import CourseListingPage from "../support/Pages/CourseListingPage";
import HomePage from "../support/Pages/HomePage";
import { courseraPage, courseDetailsPage } from '../support/Pages/IndividualCourse';
import EnterPrisePage from "../support/Pages/EnterprisePage";
import { Degree } from "../support/Pages/OnlineDegrees";

describe("Identifying Course",()=>{
    const homepage = new HomePage;
    const courselistingpage = new CourseListingPage;
    const enterprisePage= new EnterPrisePage;
    const cl = new CourseListingPage();

  

    let degree
    degree=new Degree();
    it("TS_01 @smoke",()=>{
        homepage.Nav()
        homepage.Typing()
    })
     
    it("TS_02@smoke",()=>{
        homepage.Nav()
        homepage.invalidType()
        homepage.Typing()
    })

    it.only("TS_03",()=>{
        homepage.Nav()
        
        homepage.urlcheck();
    })

    it("TS_04@smoke",()=>{
        homepage.Nav()
        homepage.Typing()
        courselistingpage.filter()
    })
    it("TS_05",()=>{
        homepage.Nav()
        homepage.Typing()
        cl.clickFilter();
        cl.clickLevel()
        cl.SelectLevel("Beginner");
        cl.clickLevel();
        cl.clickLanguage();
        cl.clickShowMore()
        cl.clickLanguage();
        cl.clickLevel()
        cl.SelectLevel("Beginner");
        cl.SelectLevel("Intermediate");
        cl.clickLevel();
        cl.clickLanguage();
        cl.clickShowMore()
        cl.countTotalLanguage("Intermediate")
        cl.clickLanguage();
        cl.clickLevel()
        cl.SelectLevel("Intermediate");
        cl.SelectLevel("Advanced");
        cl.clickLevel();
        cl.clickLanguage();
        cl.clickShowMore()
        cl.countTotalLanguage("Advanced")
        cl.clickLanguage();
        cl.clickLevel()
        cl.SelectLevel("Intermediate");
        cl.SelectLevel("Mixed");
        cl.clickLevel();
        cl.clickLanguage();
        cl.clickShowMore()
        cl.countTotalLanguage("Mixed")
        cl.clickLanguage();
        
        // cl.ApplyFilter();
        // cl.checkResultLevel();
    })



    
    it("TS_06@smoke",()=>{
        homepage.Nav()
        homepage.Typing()
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
     it("TS_07",()=>{
        homepage.Nav()
        homepage.Typing()
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
     it("TS_08",()=>{ homepage.Nav()
        homepage.Typing()
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
     it("TS_09",()=>{
        homepage.Nav()
        homepage.Typing()
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
     it('TS_10',()=>{
        homepage.Nav()
        homepage.Typing()
         cl.clickFilter();
         cl.clickLanguage();
         cl.clickshowMore(9)
         cl.selectLanguage("rarelanguage")
         cl.clickLanguage()
         cl.clickLevel()
         cl.verifyLevel()
     })
 
 
    it("TS_11",()=>{
        enterprisePage.visit();
        enterprisePage.urlCheck();
    })
    it("TS_12 @smoke",()=>{
        enterprisePage.visit();
        enterprisePage.formWithValidInput();
    })
    it("TS_13",()=>{
        enterprisePage.visit();
        enterprisePage.formWithoutName();
    })
    it("TS_14",()=>{
        enterprisePage.visit();
        enterprisePage.formWithoutOrganizationType();
    })
    it("TS_15@smoke",()=>{
        enterprisePage.visit();
        enterprisePage.formWithInvalidEmail();
    })

    it("TS_16@smoke",()=>{
        homepage.Nav();
        homepage.Typing();
        courseraPage.clickFirstCourseCard();
        courseDetailsPage.verifyUrl('https://www.coursera.org/professional-certificates/coursera-ux-design-toolkit');
        courseDetailsPage.verifyCourseTitleVisibility();

    })
    it("TS_17",()=>{
        homepage.Nav();
        homepage.Typing();
        courseraPage.clickFirstCourseCard();
        courseDetailsPage.logNumberOfModules();
        courseDetailsPage.clickModulesLink();
        courseDetailsPage.logModuleHeadings();
        courseDetailsPage.logSkillsGained();
        courseDetailsPage.careerinsights();

    })
    it("TS_18",()=>{
        homepage.Nav();
        homepage.Typing();
        courseraPage.clickFirstCourseCard();
        courseDetailsPage.verifyCourseSeries();
        courseDetailsPage.verifyCareerInsights();
        

    })

    it('TC19', () => {
        degree.visit()
        degree.setProgramLevel();
        degree.clickApply();
        degree.checkUrl();
    });
    it('TC20',()=>{
        degree.visit()
        degree.setProgramLevel();
        degree.clickApply();
        degree.setSubject()
        degree.clickApply();
        degree.checkData()
    })
    it('TC21',()=>{
        degree.visit()
        degree.setSubject()
        degree.clickApply();

        degree.checkbach()
        degree.checkmaster()
        
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
        });
        

    

})
