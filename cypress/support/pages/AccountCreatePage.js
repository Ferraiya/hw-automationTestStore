class AccountLoginPage extends BasePage{
    visit(){
     cy.visit('/')
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
}
