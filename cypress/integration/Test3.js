/// <reference types="Cypress" />

const { expect } = require("chai");
const { describe } = require("mocha");

describe('My third test', function() {
    it('AutoPractice3', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('#checkbox-example').find('input[type="checkbox"]').check(['option2', 'option3'])

        //static dropdown
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')

        //dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text()==="India")
                {
                    $el.click()
                }
        })
        cy.get('#autocomplete').should('have.value', 'India')

        //hide-show
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radiobutton
        cy.get('[for="radio2"] > .radioButton').check().should('be.checked')
    })
})