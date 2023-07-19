import BasePage from "./BacePage";

class HomePage extends BasePage{
   visit(){
    cy.visit('/')
   }
}