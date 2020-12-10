/// <reference types="Cypress" />

const { expect } = require("chai");
const { describe } = require("mocha");

describe('My third test', function() {
    it('AutoPractice3', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

    })
})