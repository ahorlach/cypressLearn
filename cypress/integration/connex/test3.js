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
    const reports = ["Ticket Details Report"
            ,"Cost Summary Report by Product"
            ,"Material Summary Report by Product"
            //,"Plant Production Report"
            //,"Invoice Reconciliation Report"
            ]
    reports.forEach(function(reportName, index, reportList) {
        it("Global Reports Default Date Range", function(){
            cy.visit("https://connex-team-cxgld-develop-app.commandalkon.io/#/login")
            cy.get('#username').type(user)
            cy.get('#password').type(pw)
            cy.get('#button_Login').click()
            cy.wait(10000)
            cy.get("a[href*='reports']").click({force: true})
            cy.get('#quad-bottom').find(`td.td-report[title="${reportName}"]`).click({force: true})
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
                cy.log(reportName)
                // if report name is x, execute block for x; if report name is y, execute block for y
                //reportList.forEach(function(element) {
                    if(reportName = "Ticket Details Report")
                    {
                        cy.get('#dc_63 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 12:00:00 AM')
                        cy.get('#dc_64 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 11:59:59 PM')
                    }
                    else if(reportName = "Cost Summary Report by Product")
                    {
                        cy.get('#dc_42 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 12:00 AM')
                        cy.get('#dc_43 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 11:59 PM')
                    }
               // })
                    /*const reportTitle = cy.get('#dc_1 > .arjs-textBoxContent')
                    if(reportTitle.includes('Tickets'))
                    {
                        cy.get('#dc_63 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 12:00:00 AM')
                        cy.get('#dc_64 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 11:59:59 PM')
                    }
                    else if(reportTitle.includes('Cost'))
                    {
                        cy.get('#dc_42 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 12:00 AM')
                        cy.get('#dc_43 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 11:59 PM')
                    }
                    else if(reportTitle.includes('Material Summary'))
                    {
                        cy.get('#dc_22 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 12:00 AM')
                        cy.get('#dc_23 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 11:59 PM')
                    }*/



/*
                    if (reportIndex = 1) {
                        cy.get('#dc_63 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 12:00:00 AM')
                        cy.get('#dc_64 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 11:59:59 PM')
                    }
                    else if (reportIndex = 2) {
                        cy.get('#dc_42 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 12:00 AM')
                        cy.get('#dc_43 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 11:59 PM')
                    }
                    else if (reportIndex = 3) {
                        cy.get('#dc_22 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 12:00 AM')
                        cy.get('#dc_23 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 11:59 PM')
                    }*/
                //})
                   /* 
                    function fromField() {
                        let fromTagId
                        if (reportName = "Ticket Details Report") {
                            fromTagId = '#dc_63';
                        } else if (reportName = "Cost Summary Report by Product") {
                            fromTagId = '#dc_42';
                        }
                        else if (reportName = "Material Summary Report by Product") {
                            fromTagId = '#dc_22';
                        }
                        return fromTagId
                        }

                    function toField() {
                        let toTagId
                        if (reportName = "Ticket Details Report") {
                            toTagId = '#dc_64';
                        } else if (reportName = "Cost Summary Report by Product") {
                            toTagId = '#dc_43';
                        }
                        else if (reportName = "Material Summary Report by Product") {
                            toTagId = '#dc_23';
                        }
                        return toTagId
                        }
                const fromTagId = fromField(element)  
                const toTagId = toField(element)  
            
                cy.get(`${fromTagId} > .arjs-textBoxContent`)
                    .should('have.text', yesterdaysDate + ' 12:00 AM')
                cy.get(`${toTagId} > .arjs-textBoxContent`)
                    .should('have.text', yesterdaysDate + ' 11:59 PM') */
            })
        })




    })
})
/*
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
            cy.get('#dc_63 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 12:00:00 AM')
            cy.get('#dc_64 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 11:59:59 PM')
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
            cy.get('#dc_42 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 12:00 AM')
            cy.get('#dc_43 > .arjs-textBoxContent').should('have.text', yesterdaysDate + ' 11:59 PM')
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
})*/