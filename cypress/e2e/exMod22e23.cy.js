/// <reference types="cypress" />

const{ email, senha } = require("../fixtures/data.json")
const { profilePage } = require("../support/pages/profile.page")
const { checkoutPage } = require("../support/pages/checkout.page")
const { homePage } = require("../support/pages/home.page")

describe('Teste de Autenticação', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
  })

  it('Deve fazer o login com sucesso', () => {
    cy.login(email, senha)
    profilePage.customerName().should('have.text', 'Cliente EBAC')
  })

  it('Deve fazer checkout', () => {
    cy.checkout(email, senha)
    checkoutPage.checkoutSucess().should('have.text', 'Go Back Home')
  });

  it('Categorias de pesquisa devem aparecer visiveis', () => {
    cy.intercept('GET', '**/public/getCategories', { fixture: 'categories.json' }).as('getCategories')
    homePage.openSearchProduct()
    homePage.openCategoriesFilter()
    homePage.categories().should('have.length.greaterThan', 1)
  })

  it('Categorias deve ser vazia e com erro', () => {
    cy.intercept('GET', '**/public/getCategories', { statusCode: 500 }).as('getCategoriesError')
    homePage.openSearchProduct()
    homePage.openCategoriesFilter()
    homePage.categories().should('have.length', 1)
  })
})