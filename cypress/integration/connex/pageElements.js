const
    user = Cypress.env().buyer.admin.username,
    pw = Cypress.env().buyer.admin.password,
    entityCrn = Cypress.env().buyer.crn,
    companyName = Cypress.env().buyer.companyName,
    reportNameField = '#reportName',
    sandwichMenu = 'i[class="gc-icon gc-btn__icon gc-icon--large"]',
    parametersButton = 'button[title="Parameters"]';


export let getReportByNameFromTable = (reportName) => {
    return cy.get(`label:contains(${reportName})`)
      .scrollIntoView();
  };