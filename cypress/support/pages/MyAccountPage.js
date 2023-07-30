import BasePage from "./BasePage";

class MyAccountPage extends BasePage{
    
 getHeadingName(){
    return cy.get('.heading1 .subtext')
 }
 checkMyAccountUrl(){
    cy.url()
       .should('include', '/index.php?rt=account/account')
}

getFirstProductCard(){
    return cy.get('.productcart').first()
}
getQuickBasketIcon(){
    return cy.get('.quick_basket')
}

addRandomProductToCart(){
    cy.log('Add random product to cart from main page')
    cy.visit('/');
    this.getFirstProductCard().click();
    this.getQuickBasketIcon().click();
}

searchItemOnSymbol(i){
    this.getSearchField().type(`${i}{enter}`)
}
}

export default new MyAccountPage();