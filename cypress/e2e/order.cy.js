import user from '../fixtures/user.json';
import {loginViaUI , findProductByName} from '../support/helper.js';
import myAccountPage from '../support/pages/MyAccountPage.js';
import accountLoginPage from '../support/pages/AccountLoginPage.js';
import shoppingCartPage from '../support/pages/ShoppingCartPage';
import productPage from '../support/pages/ProductPage';
import checkoutConfirmationPage from '../support/pages/CheckoutConfirmationPage';
import checkoutSuccessPage from '../support/pages/CheckoutSuccessPage';

beforeEach ('Go to login page', () => {
  accountLoginPage.visit();
  loginViaUI(user);
})

it ('Place order for first item', () => {
myAccountPage.addRandomProductToCart();
shoppingCartPage.getCheckoutButton().click();
checkoutConfirmationPage.checkUserInfo(user);

checkoutConfirmationPage.getConfirmOrderButton().click();

checkoutSuccessPage.getMainText()
  .should('contain', 'Your Order Has Been Processed!');
})

it ('Place order for Acqua Di Gio Pour Homme', () => {

  myAccountPage.searchItemOnSymbol('i')

  findProductByName('Acqua Di Gio Pour Homme');

  productPage.getAddToCartButton().click();
  shoppingCartPage.getCheckoutButton().click();

  checkoutConfirmationPage.checkUserInfo(user);

  checkoutConfirmationPage.getConfirmOrderButton().click();

  checkoutSuccessPage.getMainText()
    .should('contain', 'Your Order Has Been Processed!');
})