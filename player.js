class Player {
  constructor(player) {
    this.playerType = player;
    this.wins = 0;
    this.fighter = '';
  }
  takeTurn(event) {
    this.fighter = event.target.id;
  }
  generateComputerFighter() {
    var classicTypes = ['rock', 'paper', 'scissors'];
    this.fighter = classicTypes[createRandomNumber(classicTypes.length)];
  }
}
