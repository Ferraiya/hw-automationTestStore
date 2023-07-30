class AccountSuccessPage{
    visit(){
     cy.visit('/index.php?rt=account/success')
    }

    getSuccessMessageText(){
        return cy.get('.maintext');
    }
}

export default new AccountSuccessPage();