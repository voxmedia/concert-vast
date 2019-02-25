context('Video Element Application', () => {
  beforeEach(() => {
    cy.server()
    cy.fixture('vast.xml').as('vastXML')
    cy.route('GET', 'https://ad.doubleclick.net/ddm/*', '@vastXML')
  })

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

  it('should remove classes after video plays', () => {
    cy.visit('http://localhost:8080/index.html')
    cy.get('.vast-running')
    cy.get('.vast-playing')
    cy.wait(1000)
    // fast forward the video and make sure the class is not set
    cy.get('video').then($vid => {
      const video = $vid[0]
      video.currentTime = video.duration - 1
    })
    cy.get('video').should('not.have.class', 'vast-playing')
  })

  it('should remove classes after video plays', () => {
    cy.visit('http://localhost:8080/index.html')
    cy.get('.vast-running')
    cy.get('.vast-playing')
  })
})
