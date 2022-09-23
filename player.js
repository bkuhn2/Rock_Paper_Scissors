class Player {
  constructor(player) {
    this.playerType = player; //necessary?
    // this.wins = 0; //do we need this here? or is it best in game?
    this.fighter = '';
  }
  takeTurn(event) {
    this.fighter = event.target.id;
  }
  generateComputerFighter(gameTypeArray) {
    this.fighter = gameTypeArray[createRandomNumber(gameTypeArray.length)];
  }
}
