/// <reference types="cypress" />

export const checkoutPage = {
    checkoutSucess: () => { return cy.get('[data-testid="goBackHome"]') }
}