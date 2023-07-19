export function loginViaUI(user){
    cy.log('**Submit login form ...**');

    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.loginPassword);
    cy.get('#loginFrm button').click();
}
export function login2(user){
    cy.log('**Submit login form ...**');

    user.loginName ? cy.get('#loginFrm_loginname').type(user.loginName) : cy.log('User loginname is empty, skip entering login name')
    user.password ? cy.get('#loginFrm_password').type(user.loginPassword) : cy.log('User password is empty, skip entering password')
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
    function findElement (){
    cy.get('a.prdocutname').then(($el) => {
        if ($el.text().includes(productName)) {
          cy.get'a',productName)
          .click()
        }
        else{
            cy.contains('a', '>').click().wait(200)
                findElement();
        }
      });
    }
    findElement()
}


    
    


