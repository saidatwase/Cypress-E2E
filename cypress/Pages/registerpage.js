export class registerpage{

    weblocators={

        firstName:'#input-firstname',
        lastName:'#input-lastname',
        email:'#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
        passwordConfirm:'#input-confirm',
        policyCheckbox:"input[value='1'][name='agree']",
        continue:"input[value='Continue']"
    }

    openURL(){

        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(FName){
        cy.get(this.weblocators.firstName).type(FName)
    }

    enterLastName(LName){
        cy.get(this.weblocators.lastName).type(LName)
    }

    enterEmail(email){
        cy.get(this.weblocators.email).type(email)
    }

    enterTelephone(phoneNo){
        cy.get(this.weblocators.telephone).type(phoneNo)
    }

    enterPassword (password){
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)
    }

    selectCheckbox(){
        cy.get(this.weblocators.policyCheckbox).check()
    }

    clickOnContinue (){
        cy.get(this.weblocators.continue).click()
    }


}