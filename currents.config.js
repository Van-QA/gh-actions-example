module.exports = {
  projectId: "2zy7tg",
  recordKey: "Uu907UaLX1KmesKl",
  // cloudServiceUrl: "https://cy.currents.dev", // Sorry Cypress users - the director service URL
  e2e: {
    batchSize: 3, // orchestration batch size for e2e tests (Currents only, read below)
  },
  component: {
    batchSize: 5, // orchestration batch size for component tests (Currents only, read below)
  },
};
