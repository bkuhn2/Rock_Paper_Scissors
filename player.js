class Player {
  constructor(player) {
    this.playerType = player; //necessary?
    // this.wins = 0; //do we need this here? or is it best in game?
    this.fighter = '';
  }
  takeTurn(event, currentGame) {
    if (this.playerType === 'human') {
      this.fighter = event.target.id;
      currentGame.humanFighter = this.fighter; //is this bit necessary to be in both Player and Game?
    } else if (this.playerType === 'computer' && currentGame.type === 'classic') {
      this.fighter = classicTypes[createRandomNumber(classicTypes.length)];
      currentGame.computerFighter = this.fighter;
    } else if (this.playerType === 'computer' && currentGame.type === 'spooky') {
      this.fighter = spookyTypes[createRandomNumber(spookyTypes.length)];
      currentGame.computerFighter = this.fighter;
    }
  }
}
