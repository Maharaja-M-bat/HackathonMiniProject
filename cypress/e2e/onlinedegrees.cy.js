

import { Degree } from "../support/Pages/OnlineDegrees";
import HomePage from "../support/Pages/HomePage";
describe('OnlineDegree', () => {
    let degree,home;
    beforeEach(() => {
        degree=new Degree();
        home=new HomePage();
        degree.visit()
        // home.Nav();
        cy.pause();
        // home.clickMenu()
        // home.clickDegree()

    });

    it('TC18', () => {
        cy.pause();
        degree.setProgramLevel();
        degree.clickApply();
        degree.checkUrl();
    });
    it('TC19',()=>{
        cy.pause();
        degree.setProgramLevel();
        degree.clickApply();
        degree.setSubject()
        degree.clickApply();
        degree.checkData()
    })
    it.only('TC20',()=>{
        degree.setSubject()
        degree.clickApply();
        degree.checkbach()
        degree.checkmaster()
        
    })
});
