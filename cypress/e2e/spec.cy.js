
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
        homepage.Typing()
    })

    it("TS_03",()=>{
        homepage.Nav()
        homepage.invalidType()
    })

    it("TS_04@smoke",()=>{
        homepage.Nav()
        homepage.Typing()
        courselistingpage.filter()
    })
    it("TS_05@smoke",()=>{
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
     it("TS_06",()=>{
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
     it("TS_07",()=>{ homepage.Nav()
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
     it("TS_08",()=>{
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
     it('TS_09',()=>{
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
 
 
    it("TS_10",()=>{
        enterprisePage.visit();
        enterprisePage.urlCheck();
    })
    it("TS_11 @smoke",()=>{
        enterprisePage.visit();
        enterprisePage.formWithValidInput();
    })
    it("TS_12",()=>{
        enterprisePage.visit();
        enterprisePage.formWithoutName();
    })
    it("TS_13",()=>{
        enterprisePage.visit();
        enterprisePage.formWithoutOrganizationType();
    })
    it("TS_14@smoke",()=>{
        enterprisePage.visit();
        enterprisePage.formWithInvalidEmail();
    })

    it("TS_15@smoke",()=>{
        homepage.Nav();
        homepage.Typing();
        courseraPage.clickFirstCourseCard();
        courseDetailsPage.verifyUrl('https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer');
        courseDetailsPage.verifyCourseTitleVisibility();

    })
    it("TS_16",()=>{
        homepage.Nav();
        homepage.Typing();
        courseraPage.clickFirstCourseCard();
        courseDetailsPage.logNumberOfModules();
        courseDetailsPage.clickModulesLink();
        courseDetailsPage.logModuleHeadings();
        courseDetailsPage.logSkillsGained();
        courseDetailsPage.careerinsights();

    })
    it("TS_17",()=>{
        homepage.Nav();
        homepage.Typing();
        courseraPage.clickFirstCourseCard();
        courseDetailsPage.verifyCourseSeries();
        courseDetailsPage.verifyCareerInsights();
        

    })

    it('TC18', () => {
        degree.visit()
        degree.setProgramLevel();
        degree.clickApply();
        degree.checkUrl();
    });
    it('TC19',()=>{
        degree.visit()
        degree.setProgramLevel();
        degree.clickApply();
        degree.setSubject()
        degree.clickApply();
        degree.checkData()
    })
    it('TC20',()=>{
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
