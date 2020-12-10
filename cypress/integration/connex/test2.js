/// <reference types="Cypress" />

// page elements
const header = '.app-header'
    

// test data
const
    user = Cypress.env().buyer.admin.username,
    pw = Cypress.env().buyer.admin.password,
    entityCrn = Cypress.env().buyer.crn,
    companyName = Cypress.env().buyer.companyName;

describe("Ticket filters CXGLD-995", function(){
    it("Filters review", function(){
        cy.visit("https://connex-team-cxgld-develop-app.commandalkon.io/#/login")
        cy.get('#username').type("anna.horlach+cxglhadmin@globallogic.com")
        cy.get('#password').type("Qwerty1!")
        cy.get('#button_Login').click()
        cy.get('.current-scope').should("have.text", companyName)
    })
})