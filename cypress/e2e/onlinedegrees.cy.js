


import { Degree } from "../support/Pages/OnlineDegrees";
import HomePage from "../support/Pages/HomePage";
describe('OnlineDegree', () => {
    let degree,home;
    beforeEach(() => {
        degree=new Degree();
        home=new HomePage();
        degree.visit()
        // home.Nav();
        // home.clickMenu()
        // home.clickDegree()

    });

    it('TC18', () => {
        degree.setProgramLevel();
        degree.clickApply();
        degree.checkUrl();
    });
    it('TC19',()=>{
        degree.setProgramLevel();
        degree.clickApply();
        degree.setSubject()
        degree.clickApply();
        degree.checkData()
    })
    it('TC20',()=>{
        degree.setSubject()
        degree.clickApply();

        degree.checkbach()
        degree.checkmaster()
        
    })
});

