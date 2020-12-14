/// <reference types="Cypress" />

const { expect } = require("chai");
const { describe } = require("mocha");

describe('My third test', function() {
    it('AutoPractice4', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')

    })
})