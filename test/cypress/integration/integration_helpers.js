export function fastForwardVideo(cy) {
  cy.get('video').then($vid => {
    const video = $vid[0]
    video.currentTime = video.duration - 1
  })
}
