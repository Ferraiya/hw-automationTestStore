class ShoppingCartPage {
    
    getCheckoutButton(){
        cy.log('**Open basket**');
        return cy.get('#cart_checkout1');
        }
   }
   
export default new ShoppingCartPage();