class BasePage{
 
    getLoginOrRegisterButton(){ //назва починається з гет, завершується типом елементу - баттон
     return cy.get('#customer_menu_top')
    }
 }