/// <reference types="Cypress" />

const { expect } = require("chai");
const { describe } = require("mocha");

describe('My third test', function() {
    it('AutoPractice4', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#opentab').then(function(el){
            const url = el.prop('href')
            cy.visit(url)
        })

    })
})