class Player {
  constructor(player) {
    this.playerType = player;
    this.wins = 0;
    this.fighter = '';
  }
  takeTurn(event) {
    this.fighter = event.target.id;
    computerPlayer.generateComputerFighter();
    currentGame.humanFighter = this.fighter;
  }
  generateComputerFighter() {
    var classicTypes = ['rock', 'paper', 'scissors'];
    this.fighter = classicTypes[createRandomNumber(classicTypes.length)];
    currentGame.computerFighter = this.fighter;
  }
  // chooseHumanFighter() { // redundant? same as takeTurn?
  //
  // }
}
