import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json';
import homePage from '../support/pages/HomePage';
import accountLoginPage from '../support/pages/AccountLoginPage';
import accountCreatePage from '../support/pages/AccountCreatePage';
import accountSuccessPage from '../support/pages/AccountSuccessPage';
import myAccountPage from '../support/pages/MyAccountPage';
//import homePageWithConstructor from '../support/pages/HomePageWithConstructor';
user.address = faker.location.streetAddress();
user.city = faker.location.city();
user.company = faker.company.name();
user.email = faker.internet.email();
//user.fax = faker.location.fax;
user.firstName = faker.person.firstName();
user.lastName = faker.person.lastName();
user.loginName = faker.internet.userName();
user.password = faker.internet.password({length: 20});
user.phoneNumber = faker.phone.number('+380## ### ## ##');
user.zipCode = faker.location.zipCode();

  it('Successful Registration', () => {
      // homePageWithConstructor.getLoginOrRegisterButton().click()

      //(`${HomePageWithConstructor.elements.getLoginOrRegisterButton()`).click() - how to use constructor
      homePage.getLoginOrRegisterButton().click();
      accountLoginPage.getRegisterButton().click();
      accountCreatePage.fillInRegistrationForm(user);
      accountSuccessPage.getSuccessMessageText().should('be.visible').and('contain', "Your Account Has Been Created")
    })

    it('First Log in', () => {
      homePage.visit();
      homePage.getLoginOrRegisterButton().click();

      accountLoginPage.fillInLoginForm(user)
      cy.log('**Verifying "My account" page...**');
      myAccountPage.getHeadingName().should('have.text', user.firstName);
    })

    it('Registration attempt without email', () => {
      user.email = " ";
      homePage.visit();

      homePage.getLoginOrRegisterButton().click();
      accountLoginPage.getRegisterButton().click();
      accountCreatePage.fillInRegistrationForm(user);
      accountCreatePage.getErrorMessageText().should('contain', 'Email Address does not appear to be valid')
    })

    it('Registration attempt without firstName', () => {
      user.firstName = "{leftArrow}";
      homePage.visit();

      homePage.getLoginOrRegisterButton().click();
      accountLoginPage.getRegisterButton().click();
      accountCreatePage.fillInRegistrationForm(user);
      accountCreatePage.getErrorMessageText().should('contain', 'First Name must be between 1 and 32 characters!')
    })