const VIDEO_PAGE = 'http://localhost:8080/test/index.video-preroll.html'

context('Video Element as Preroll Application', () => {
  beforeEach(() => {
    cy.server()
    cy.fixture('vast.xml').as('vastXML')
    cy.route('GET', 'https://ad.doubleclick.net/ddm/*', '@vastXML')
  })

  it('should have a video element on the page', () => {
    cy.visit(VIDEO_PAGE)
    cy.get('video').should('have.class', 'vast-running')
  })

  it('should load an impression tracker on the page when playing', () => {
    cy.visit(VIDEO_PAGE)
    cy.get('img').should('have.length', 0)
    cy.get('.vast-running')
    cy.get('.vast-playing')
    cy.get('img').should('have.length', 2)
  })

  it('should run through all the quartiles when playing', () => {
    cy.visit(VIDEO_PAGE)
    cy.get('img').should('have.length', 0)
    cy.get('.vast-running')
    cy.get('.vast-playing')
    fastForwardVideo(cy)
    cy.wait(500)
    cy.get('img').should('have.length', 8)
  })

  it('should open a new window when clicked', () => {
    cy.visit(VIDEO_PAGE, {
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
    cy.visit(VIDEO_PAGE)
    cy.get('.vast-running')
    cy.get('.vast-playing')
    cy.wait(1000)
    // fast forward the video and make sure the class is not set
    fastForwardVideo(cy)
    cy.get('video').should('not.have.class', 'vast-playing')
  })

  it('should remove vast video after vast video plays', () => {
    cy.visit(VIDEO_PAGE)
    cy.get('.vast-running')
    cy.get('.vast-playing')

    fastForwardVideo(cy)
    cy.wait(1000)
    cy.get('video').find('source[src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"]')
  })

  it('should not open the clickthrough on click after vast video completes', () => {
    cy.visit(VIDEO_PAGE, {
      onBeforeLoad(win) {
        cy.stub(win, 'open')
          .as('windowOpen')
          .returns({ focus: () => {} })
      },
    })
    cy.get('.vast-playing')
    fastForwardVideo(cy)
    cy.wait(3000)
    cy.get('video').click()
    cy.get('@windowOpen').should('not.be.called')
  })
})

function fastForwardVideo(cy) {
  cy.get('video').then($vid => {
    const video = $vid[0]
    video.currentTime = video.duration - 1
  })
}
