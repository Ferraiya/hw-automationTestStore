export default class BasePage{
 
    getLoginOrRegisterButton(){ //назва починається з гет, завершується типом елементу - баттон
        cy.log('** Opening account login page ...**');
        return cy.get('#customer_menu_top');
    }

    getSearchField(){
        return cy.get('input#filter_keyword');
    }
 }