/// <reference types="cypress" />

class CreatePage {
    get #firstName() { return cy.get('[data-testid="firstName"]') }
    get #lastName() { return cy.get('[data-testid="lastName"]') }
    get #phone() { return cy.get('[data-testid="phone"]') }
    get #email2() { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]') }
    get #senha2() { return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]') }
    get #resenha2() { return cy.get('[data-testid="repassword"]') }
    get #btnSignUp() { return cy.get('[data-testid="create"]') }

    createAcc(firstName, lastName, phone, email2, senha2){
        this.#firstName.type(firstName)
        this.#lastName.type(lastName)
        this.#phone.type(phone)
        this.#email2.type(email2)
        this.#senha2.type(senha2)
        this.#resenha2.type(senha2)
        this.#btnSignUp.click()
    }
}

module.exports = new CreatePage();