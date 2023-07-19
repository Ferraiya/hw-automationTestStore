class AccountLoginPage extends BasePage{
    visit(){
     cy.visit('/index.php?rt=account/success')
    }

    getSuccessMessageText(){
        return cy.get('.maintext')
    }


}