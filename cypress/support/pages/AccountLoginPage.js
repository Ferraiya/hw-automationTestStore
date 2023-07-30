import BasePage from "./BasePage";

class HomePage extends BasePage{
   visit(){
    cy.visit('/')
   }
   getRegisterButton(){
      return cy.get('#accountFrm button');
   }
}

export default new HomePage();