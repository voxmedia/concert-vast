Cypress.Commands.add('fastForwardVideo', (options = { fromEnd: 0.5 }) => {
  cy.get('video').then($vid => {
    const video = $vid[0];
    video.currentTime = video.duration - options.fromEnd;
  });
});
