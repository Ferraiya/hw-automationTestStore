import BasePage from "./BasePage";
import { checkAlertStyles } from '../helper';

class AccountLoginPage extends BasePage{
   visit(){
    cy.visit('/index.php?rt=account/login');
   }

   getRegisterButton(){
      return cy.get('#accountFrm button');
   }

   getLoginNameField(){
      return cy.get('#loginFrm_loginname');
   }

   getPasswordField(){
      return cy.get('#loginFrm_password');
   }

   getSubmitLoginFormButton(){
      return cy.get('[type="submit"][title="Login"]');
   }

   fillInLoginForm(user){
      cy.log('**Submit login form ...**');

      user.loginName ? this.getLoginNameField().type(user.loginName) : cy.log('User loginname is empty, skip entering login name')
      user.password ? this.getPasswordField().type(user.loginPassword) : cy.log('User password is empty, skip entering password')
      this.getSubmitLoginFormButton().click();
   }

   checkLoginUrl(){
      cy.url()
         .should('include', '/index.php?rt=account/login')
   }

   checkAlertTextAndClose(){
      cy.contains('.alert-error', "Error: Incorrect login or password provided.")
         .should('be.visible')

      cy.log('**Close alert, check that it disappears**')
      cy.get('.alert-error [data-dismiss="alert"]')
         .click()
   
      cy.get('.alert-error')
         .should('not.exist')
   }

   checkUnsuccessfulLogin(user){
      this.fillInLoginForm(user)
      checkAlertStyles();
      this.checkAlertTextAndClose();
      this.checkLoginUrl();
   }
}

export default new AccountLoginPage();