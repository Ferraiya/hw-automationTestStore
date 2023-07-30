import BasePage from "./BasePage";

class AccountCreatePage extends BasePage{
    visit(){
     cy.visit('/index.php&rt=account/create')
    }

    getFirstNameField(){
        return cy.get('#AccountFrm_firstname');
    }

    getLastNameField(){
        return get('#AccountFrm_lastname');
    }

    getEmailField(){
        return get('#AccountFrm_email');
    }

    getPhoneField(){
        return cy.get('#AccountFrm_firstname');
    }

    getFaxField(){
        return cy.get('#AccountFrm_fax');
    }

    getCompanyField(){
        return cy.get('#AccountFrm_company');
    }

    getCountryIDField(){
        return cy.get('#AccountFrm_country_id');
    }
    getZoneIDField(){
        return cy.get('#AccountFrm_zone_id');
    }
    getCityField(){
        return cy.get('#AccountFrm_city');
    }
    getPostCodeField(){
        return cy.get('#AccountFrm_postcode');
    }

    getLoginField(){
        return cy.get('#AccountFrm_loginname');
    }

    getPasswordField(){
        return cy.get('#AccountFrm_password');
    }

    getPasswordConfirmField(){
        return cy.get('#AccountFrm_confirm');
    }

    getNewsletterDecLineRadioButton(){
        return cy.get('#AccountFrm_newsletter0[type="radio"]');
    }

    getPrivacyPolicyCheckBox(){
        return cy.get('#AccountFrm_agree');
    }

    getSubmitRegistrationFormButton(){
        return cy.get('.form-group [type="submit"]');
    }
    getErrorMessageText(){

}


    fillInRegistrationForm(user){
      cy.log('**Fill in registration form ...**');
      this.getFirstNameField().type(user.firstName);
      this.getLastNameField().type(user.lastName);
      this.getEmailField().type(user.email);
      this.getPhoneField().type(user.phoneNumber);
    // cy.get('#AccountFrm_fax').type(user.fax);
        this.getCompanyField().type(user.company);
        this.getCountryIDField().type(user.address);
        this.getCityField().type(user.city);
        this.getCountryIDField().select(user.country);
        this.getZoneIDField().select(user.region);
        this.getPhoneField().type(user.zipCode);
        this.getLoginField().type(user.loginName);
        this.getPasswordField().type(user.password);
        this.getPasswordConfirmField().type(user.password);

      cy.log('**Decline news letter and confirm privacy policy ...**');
      this.getLoginOrRegisterButton().check();
      this.getPrivacyPolicyCheckBox().check();
      this.getSubmitRegistrationFormButton().click();
    }
}

export default new AccountCreatePage();
