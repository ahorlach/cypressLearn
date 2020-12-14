/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage'

describe('Test9Framework', function() {
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('Test1', function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        //cy.get('form input.form-control:nth-child(1)').type('Anna')
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2')
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get(':nth-child(2) > .nav-link').click().debug()

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })

        
    })
})