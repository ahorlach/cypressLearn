/// <reference types="Cypress" />

const { expect } = require("chai");
const { describe } = require("mocha");

describe('My first test', function() {
    it('Does not do much!', function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')

        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                $el.find('button').click()
            }
        })
        //const logo = cy.get('.brand')
        //cy.log(logo.text())
    })
})