class HomePageWithConstructor{
    constructor(){
        this.elements = {};
        this.elements.loginOrRegisterButton = '#customer_menu_top'
    }
    
    
    
    visit(){
     cy.visit('/')
    }
 
    getLoginOrRegisterButton(){ //назва починається з гет, завершується типом елементу - баттон
     return cy.get(this.elements.loginOrRegisterButton)
    }
 }