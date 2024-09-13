/// <reference types="cypress" />

const{ email, senha } = require("../fixtures/data.json")
const { profilePage } = require("../support/pages/profile.page")
const { checkoutPage } = require("../support/pages/checkout.page")

describe('Teste de Autenticação', () => {

  beforeEach(() => {
   
  })

  it('Deve fazer o login com sucesso', () => {
    cy.login(email, senha)
    profilePage.customerName().should('have.text', 'Cliente EBAC')
  })

  it.only('Deve fazer checkout', () => {
    cy.checkout(email, senha)
    checkoutPage.checkoutSucess().should('have.text', 'Go Back Home')
  });
})