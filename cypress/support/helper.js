export function loginViaUI(user){
    cy.log('**Submit login form ...**');

    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.loginPassword);
    cy.get('#loginFrm button').click();
}

function loginViaAPI(){
}

export function checkAlertStyles(){
    cy.get('.alert-error')
        .should('be.visible')
        .and('have.css', 'background-color', 'rgb(242, 222, 222)')
        .and('have.css', 'border-bottom-color', 'rgb(235, 204, 209)')
        .and('have.css', 'color', 'rgb(169, 68, 66)')
}

export function findProductByName(productName){
    cy.get('a.prdocutname').then(($el) => {
        if ($el.text().includes(productName)) {
          cy.get(`a[title="${productName}"]`)
            .click()
        }
        else{
            cy.contains('a', '>').click()
            findProductByName(productName);
        }
      });
}


    
    


