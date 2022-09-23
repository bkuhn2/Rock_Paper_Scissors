class Player {
  constructor(player) {
    this.playerType = player; //change to 'name'???
    this.wins = 0;
    // this.fighter = ''; //tracking in Game, per spec???
    this.token = ''; //i don't have a token - where does this come into game in comp
  }
  takeTurn(event, currentGame) {
    if (this.playerType === 'human') {
      currentGame.humanFighter = event.target.id;
    } else if (this.playerType === 'computer' && currentGame.type === 'classic') {
      currentGame.computerFighter = classicTypes[createRandomNumber(classicTypes.length)];
    } else if (this.playerType === 'computer' && currentGame.type === 'spooky') {
      currentGame.computerFighter = spookyTypes[createRandomNumber(spookyTypes.length)];
    }
  }
}
