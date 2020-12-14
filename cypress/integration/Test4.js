/// <reference types="Cypress" />

const { expect } = require("chai");
const { describe } = require("mocha");

describe('My third test', function() {
    it('AutoPractice4', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //

        cy.get('#alertbtn').click().then
        cy.get('#confirmbtn').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Hello , share this practice page and share your knowledge`)
        })

        cy.on('window:confirm',(str)=> 
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        cy.get('#opentab').invoke('removeAttr', 'target').invoke('attr', 'href', 'https://www.rahulshettyacademy.com/#/index').click()
        cy.url().should('include', 'rahulshettyacademy')
        cy.go('back')
    

    })
})