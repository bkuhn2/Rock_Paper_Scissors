class Player {
  constructor(player, token) {
    this.name = player;
    this.wins = 0;
    // this.fighter = ''; //tracking in Game, per spec???
    this.token = token; //i don't have a token - where does this come into game in comp
  }
  takeTurn(event, currentGame) {
    if (this.name !== 'computer') {
      currentGame.humanFighter = event.target.id;
    } else if (currentGame.type === 'classic') {
      currentGame.computerFighter = classicTypes[createRandomNumber(classicTypes.length)];
    } else if (currentGame.type === 'spooky') {
      currentGame.computerFighter = spookyTypes[createRandomNumber(spookyTypes.length)];
    }
  }
}
