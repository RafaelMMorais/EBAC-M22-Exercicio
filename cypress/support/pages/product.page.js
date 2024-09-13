/// <reference types="cypress" />

class openPrdc {
    get #btnBrowse() { return cy.get('[href="/Tab/Browse"]') }
    get #btnPrdc() { return cy.get(':nth-child(2) > [data-testid="productDetails"]') }
    get #btnAdd() { return cy.get('[data-testid="addToCart"]') }
    get #btnPay() { return cy.get('[data-testid="selectAddressOrContinueToPayment"]') }
    get #btnCheckout() { return cy.get('[data-testid="completeCheckout"]') }

    prdcOpen(){
        this.#btnBrowse.click()
        this.#btnPrdc.click()
        this.#btnAdd.click()
        this.#btnPay.click()
        this.#btnCheckout.click()
    }
}

module.exports = new openPrdc();