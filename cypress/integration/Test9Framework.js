/// <reference types="Cypress" />
import HomePage from '../integration/pageObjects/HomePage.js'
import ProductsPage from '../integration/pageObjects/ProductsPage.js'

describe('Test9Framework', function() {
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('Test1', function() {
        Cypress.config('defaultCommandTimeout', 8000)
        const homePage = new HomePage()
        const productsPage = new ProductsPage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        //cy.get('form input.form-control:nth-child(1)').type('Anna')
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEnterpreneur().should('be.disabled')
        homePage.getShopTab().click()

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })

        productsPage.getCheckoutButton().click()
        cy.contains('Checkout').click()
        cy.get('#country').type('Ukraine')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').check({force: true})
        cy.get('.ng-untouched > .btn').click()
        cy.get('.alert').should('includes.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
    })
})