context('Video Element Application', () => {
  it('should have a video element on the page', () => {
    cy.visit('http://localhost:8080/index.html')
    cy.get('video').should('have.class', 'vast-running')
  })

  it('should load an impression tracker on the page when playing', () => {
    cy.visit('http://localhost:8080/index.html')
    cy.get('img').should('have.length', 0)
    cy.get('.vast-running')
    cy.get('.vast-playing')
    cy.get('img').should('have.length', 2)
  })

  it('should open a new window when clicked', () => {
    cy.visit('http://localhost:8080/index.html', {
      onBeforeLoad(win) {
        cy.stub(win, 'open')
          .as('windowOpen')
          .returns({ focus: () => {} })
      },
    })
    cy.wait(500)
    cy.get('.vast-running').click()
    cy.get('@windowOpen').should('be.called')
  })
})
