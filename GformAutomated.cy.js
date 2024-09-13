describe('Google Form Automation', () => {
  it('fill google form and submit', () => {

    cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSd8kxrEBU0sgJujV7eYAO6exg_DX8MBOtrR-SkRBOhtM72Rjw/viewform?usp=sf_link')

    cy.xpath('(//input[@type="text"])[1]').type('Solihin')

    cy.contains('Individu').click()

    cy.xpath('(//input[@type="text"])[2]').type('16')

    cy.get('input[type="date"]').type('2023-01-01')

    cy.get('div[role="button"][aria-label="Submit"]').click();
//ini assertion
    cy.url().should('include', 'formResponse')
  })
})
