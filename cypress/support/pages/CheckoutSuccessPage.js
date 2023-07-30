class CheckoutSuccessPage {
    
    getMainText(){
        cy.log('**Your Order processed page displayed**');
        return cy.get('.maintext');
        }
   }
   
export default new CheckoutSuccessPage();