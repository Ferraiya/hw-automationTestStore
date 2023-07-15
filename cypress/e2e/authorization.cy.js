///<reference types = 'cypress'/>

import user from '../fixtures/user.json';
import { loginPage } from '../support/pageObjects/loginPage.js';
import { loginViaUI , login2, checkAlertStyles } from '../support/helper.js';

describe('Authorization spec', () => {

    beforeEach ('Go to login page', () => {
      cy.visit('/index.php?rt=account/login');
    })

    it ('Log in with valid creds', () => {
      loginViaUI(user)

      cy.log('**Verifying "My account" page...**');
      cy.get('.heading1 .subtext').should('have.text', user.firstName);
    })

    it('Cannot log in without creds', () => {
      user.loginName = "";
      user.password = "";
      login2(user)
      checkAlertStyles();
      loginPage.checkAlertTextAndClose();
      loginPage.checkLoginUrl();

      })
  
      it('Cannot log in with only Login name', () => {
        user.password = "";
        login2(user)
        checkAlertStyles();
        loginPage.checkAlertTextAndClose();
        loginPage.checkLoginUrl();
      })
  
      it('Cannot log in with only password', () => {
        user.loginName = "";
        login2(user)
        checkAlertStyles();
        loginPage.checkAlertTextAndClose();
        loginPage.checkLoginUrl();
      })
  
      it('Cannot log in with password "true"', () => {
   
        user.password = "true";
        login2(user)
        checkAlertStyles();
        loginPage.checkAlertTextAndClose();
        loginPage.checkLoginUrl();
      })
  
      it('Cannot log in with xss in password', () => {
   
        user.password = "<iframe src\=\"javascript:alert(\`xss\`)\">";
        login2(user)
        checkAlertStyles();
        loginPage.checkAlertTextAndClose();
        loginPage.checkLoginUrl();
      })
    })