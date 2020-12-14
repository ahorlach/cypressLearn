/// <reference types="Cypress" />

const { expect } = require("chai");
const { describe } = require("mocha");

describe('My third test', function() {
    it('AutoPractice4', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#product').find('tr td:nth-child(2)').as('coursesList')
        cy.get('@coursesList').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes('Python'))
            {
                cy.get('@coursesList').eq(index).next().then(function(price)
                {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })

    })
})