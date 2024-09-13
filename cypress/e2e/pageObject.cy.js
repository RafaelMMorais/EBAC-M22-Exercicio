/// <reference types="cypress" />

const { homePage } = require("../support/pages/home.page")
const LoginPage = require("../support/pages/login.page")
const{ email, senha, firstName, lastName, phone, email2, senha2, resenha2 } = require("../fixtures/data.json")
const { profilePage } = require("../support/pages/profile.page")
const createPage = require("../support/pages/create.page")

describe('Teste de Autenticação', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
  })

  it('Deve fazer o login com sucesso', () => {
    homePage.openMenu('Account')
    LoginPage.login(email, senha)
    homePage.openMenu('Account')
    profilePage.customerName().should('have.text', 'Cliente EBAC')
  })

  it.only('Deve criar uma conta com sucesso', () => {
    homePage.openMenu('Account')
    LoginPage.signUp()
    createPage.createAcc(firstName, lastName, phone, email2, senha2, resenha2)
    homePage.openMenu('Account')
    profilePage.customerName().should('have.text', 'Odinson Thor')
  });

})