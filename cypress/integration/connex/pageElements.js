


export let getReportByNameFromTable = (reportName) => {
    return cy.get(`label:contains(${reportName})`)
      .scrollIntoView();
  };