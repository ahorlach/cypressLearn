/// <reference types="Cypress" />
// test data
const
    user = Cypress.env().buyer.admin.username,
    pw = Cypress.env().buyer.admin.password,
    entityCrn = Cypress.env().buyer.crn,
    companyName = Cypress.env().buyer.companyName,
    reportNameField = '#reportName',
    sandwichMenu = 'i[class="gc-icon gc-btn__icon gc-icon--large"]',
    parametersButton = 'button[title="Parameters"]';

describe("Global Reports Default Date Range", function(){
    it("Ticket Details Report", function(){
        const reportName = 'Ticket Details Report'
        cy.visit("https://connex-team-cxgld-develop-app.commandalkon.io/#/login")
        cy.get('#username').type(user)
        cy.get('#password').type(pw)
        cy.get('#button_Login').click()
        cy.wait(10000)
        cy.get("a[href*='reports']").click()
        cy.get('#quad-bottom').find("td.td-report[title='Ticket Details Report']").click({force: true})
        cy.get(reportNameField).should('have.value', reportName)
        cy.url().then(url => {
            const runReportUrl = url.replace('/edit', '/run')
            const yesterdaysDate = Cypress.moment().subtract(1, 'days').format('MM/DD/YYYY')
            cy.visit(runReportUrl)
            cy.url().should('include', '/run')
            cy.get(sandwichMenu).click()
            cy.get(parametersButton).click()
            cy.get("div[title='Start Date'] + div.gc-label__content").find("input.gc-input.gc-size-sm")
                .should('have.value', yesterdaysDate + ' 12:00 AM')
            cy.get("div[title='End Date'] + div.gc-label__content").find("input.gc-input.gc-size-sm")
                .should('have.value', yesterdaysDate + ' 11:59 PM')
            cy.get('#dc_63 > .arjs-textBoxContent')
                .should('have.text', yesterdaysDate + ' 12:00:00 AM')
            cy.get('#dc_64 > .arjs-textBoxContent')
                .should('have.text', yesterdaysDate + ' 11:59:59 PM')
        })
    })

    it("Cost Summary Report by Product", function(){
        const reportName = 'Cost Summary Report by Product'
        cy.visit("https://connex-team-cxgld-develop-app.commandalkon.io/#/login")
        cy.get('#username').type(user)
        cy.get('#password').type(pw)
        cy.get('#button_Login').click()
        cy.wait(10000)
        cy.get("a[href*='reports']").click()
        cy.get('#quad-bottom').find("td.td-report[title='Cost Summary Report by Product']").click({force: true})
        cy.get(reportNameField).should('have.value', reportName)
        cy.url().then(url => {
            const runReportUrl = url.replace('/edit', '/run')
            const yesterdaysDate = Cypress.moment().subtract(1, 'days').format('MM/DD/YYYY')
            cy.visit(runReportUrl)
            cy.url().should('include', '/run')
            cy.get(sandwichMenu).click()
            cy.get(parametersButton).click()
            cy.get("div[title='Start Date'] + div.gc-label__content").find("input.gc-input.gc-size-sm")
                .should('have.value', yesterdaysDate + ' 12:00 AM')
            cy.get("div[title='End Date'] + div.gc-label__content").find("input.gc-input.gc-size-sm")
                .should('have.value', yesterdaysDate + ' 11:59 PM')
            cy.get('#dc_42 > .arjs-textBoxContent')
                .should('have.text', yesterdaysDate + ' 12:00 AM')
            cy.get('#dc_43 > .arjs-textBoxContent')
                .should('have.text', yesterdaysDate + ' 11:59 PM')
        })
    })

    it("Material Summary Report by Product", function(){
        const reportName = 'Material Summary Report by Product'
        cy.visit("https://connex-team-cxgld-develop-app.commandalkon.io/#/login")
        cy.get('#username').type(user)
        cy.get('#password').type(pw)
        cy.get('#button_Login').click()
        cy.wait(10000)
        cy.get("a[href*='reports']").click()
        cy.get('#quad-bottom').find("td.td-report[title='Material Summary Report by Product']").click({force: true})
        cy.get(reportNameField).should('have.value', reportName)
        cy.url().then(url => {
            const runReportUrl = url.replace('/edit', '/run')
            const yesterdaysDate = Cypress.moment().subtract(1, 'days').format('MM/DD/YYYY')
            cy.visit(runReportUrl)
            cy.url().should('include', '/run')
            cy.get(sandwichMenu).click()
            cy.get(parametersButton).click()
            cy.get("div[title='Start Date'] + div.gc-label__content").find("input.gc-input.gc-size-sm")
                .should('have.value', yesterdaysDate + ' 12:00 AM')
            cy.get("div[title='End Date'] + div.gc-label__content").find("input.gc-input.gc-size-sm")
                .should('have.value', yesterdaysDate + ' 11:59 PM')
            cy.get('#dc_22 > .arjs-textBoxContent')
                .should('have.text', yesterdaysDate + ' 12:00 AM')
            cy.get('#dc_23 > .arjs-textBoxContent')
                .should('have.text', yesterdaysDate + ' 11:59 PM')
        })
    })
})