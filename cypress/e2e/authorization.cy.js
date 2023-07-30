///<reference types = 'cypress'/>

import user from '../fixtures/user.json';
import myAccountPage from '../support/pages/MyAccountPage.js';
import accountLoginPage from '../support/pages/AccountLoginPage.js';
import { loginViaUI } from '../support/helper';

describe('Authorization spec', () => {

    beforeEach ('Go to login page', () => {
      accountLoginPage.visit();
    })

    it ('Log in with valid creds', () => {
      loginViaUI(user);

      cy.log('**Verifying "My account" page...**');
      myAccountPage.getHeadingName().should('have.text', user.firstName);
    })

    it('Cannot log in without creds', () => {
      user.loginName = "{leftArrow}";
      user.password = "{leftArrow}";
      accountLoginPage.checkUnsuccessfulLogin(user)

      })
  
    it('Cannot log in with only Login name', () => {
      user.password = " ";
      accountLoginPage.checkUnsuccessfulLogin(user)
      })
  
    it('Cannot log in with only password', () => {
      user.loginName = " ";
      accountLoginPage.checkUnsuccessfulLogin(user)
      })
  
    it('Cannot log in with password "true"', () => {
   
      user.password = "true";
      accountLoginPage.checkUnsuccessfulLogin(user)
      })
  
    it('Cannot log in with xss in password', () => {
   
      user.password = "<iframe src=\"javascript:alert(\`xss\`)\">";
      accountLoginPage.checkUnsuccessfulLogin(user)
      })
})