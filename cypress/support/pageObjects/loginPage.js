/// <reference types="cypress" />

export class Login{

checkLoginUrl(){
    cy.url()
        .should('include', '/index.php?rt=account/login')
}
checkAlertTextAndClose(){
    cy.contains('.alert-error', "Error: Incorrect login or password provided.")
        .should('be.visible')

    cy.log('**Close alert, check that it disappears**')
    cy.get('.alert-error [data-dismiss="alert"]')
        .click()
  
    cy.get('.alert-error')
        .should('not.exist')
}
}

export const loginPage = new Login()