import BasePage from "./BasePage";

class HomePageWithConstructor extends BasePage{
    constructor(){
        this.elements = {};
        this.elements.loginOrRegisterButton = '#customer_menu_top';
    }
    visit(){
     cy.visit('/')
    }
 
    getLoginOrRegisterButton(){ //назва починається з гет, завершується типом елементу - баттон
        return cy.get(this.elements.loginOrRegisterButton); //це дає зручність, що ви можете дістати не гет, а саме локатор, але дуже рідко
    }
 }
 export default new HomePageWithConstructor();