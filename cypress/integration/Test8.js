/// <reference types="Cypress" />

import 'cypress-iframe'

describe('iframe', function() {
    it('iframe', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')

        cy.iframe().find('a[href*="mentorship"]').eq(1).click({force: true})

        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
    })
})