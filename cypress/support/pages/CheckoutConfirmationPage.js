class CheckoutConfirmationPage {
    
    getShippingOptionsSection(){
        cy.log('Verify shipping data');
        return cy.get('.table.confirm_shippment_options'); 
    }
    
    getPaymentOptionsSection(){
        cy.log('Verify payment data');
        return cy.get('.table.confirm_payment_options');
    }

    getConfirmOrderButton(){
        cy.log('Confirm order');
        return cy.get('#checkout_btn');
    }
    
    checkUserInfo(user){
    this.getShippingOptionsSection()
        .should('contain', user.firstName)
        .and('contain', user.lastName)
        .and('contain', user.phoneNumber);


    this.getPaymentOptionsSection()
        .should('contain', user.firstName)
        .and('contain', user.lastName)
        .and('contain', user.phoneNumber); 
   }
}
   
export default new CheckoutConfirmationPage();