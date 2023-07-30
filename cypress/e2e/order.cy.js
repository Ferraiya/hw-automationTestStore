import user from '../fixtures/user.json';
import {loginViaUI} from '../support/helper.js';
import {findProductByName} from '../support/helper.js';

beforeEach ('Go to login page', () => {
  cy.visit('/index.php?rt=account/login');
  loginViaUI(user);
})

it('Place order', () => {

    cy.log('Add random product to cart from main page')
    cy.visit('/');
    cy.get('.productcart').first().click();
    cy.get('.quick_basket').click();

    cy.log('Open basket')
    cy.get('#cart_checkout1').click();

    cy.log('Verify checkout data')
    cy.get('.table.confirm_shippment_options')
        .should('contain', user.firstName)
        .and('contain', user.lastName)
        .and('contain', user.phoneNumber);

    cy.get('.table.confirm_payment_options')
        .should('contain', user.firstName)
        .and('contain', user.lastName)
        .and('contain', user.phoneNumber);

    cy.log('Confirm order')
    cy.get('#checkout_btn').click();

    cy.log('Thank you page displayed')
    cy.get('.maintext').should('contain', 'Your Order Has Been Processed!');
})

it.only('Place order HW', () => {

  cy.log('Add random product to cart from main page')

  cy.get('input#filter_keyword').type('i{enter}');

  findProductByName('Acqua Di Gio Pour Homme');

  cy.get('.productpagecart .cart').click();

  cy.log('Open basket')
  cy.get('#cart_checkout1').click();

  cy.log('Verify checkout data')
  cy.get('.table.confirm_shippment_options')
    .should('contain', user.firstName)
    .and('contain', user.lastName)
    .and('contain', user.phoneNumber);

  cy.get('.table.confirm_payment_options')
    .should('contain', user.firstName)
    .and('contain', user.lastName)
    .and('contain', user.phoneNumber);

  cy.log('Confirm order')
  cy.get('#checkout_btn').click();

  cy.log('Thank you page displayed')
  cy.get('.maintext').should('contain', 'Your Order Has Been Processed!');
})