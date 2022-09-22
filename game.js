class Game {
  constructor() { //need pass in two players as arguments??
    this.humanFighter = ''; //is this redundant??
    this.computerFighter = ''; //is this redundant??
    this.winner = '';
    this.tie = false;
    this.type = ''; //ie classic or not
    this.humanWins = 0; //based off player instance but is this redundant???
    this.computerWins = 0; //based off player instance but is this redundant???
  }
  determineWinner(human, computer) {
    if (human.fighter === 'rock' && computer.fighter === 'scissors') {
      this.winner = human;
      human.wins ++;
    } else if (human.fighter === 'rock' && computer.fighter === 'paper') {
      this.winner = computer;
      computer.wins ++;
    } else if (human.fighter === 'paper' && computer.fighter === 'rock'){
      this.winner = human;
      human.wins ++;
    } else if (human.fighter === 'paper' && computer.fighter === 'scissors') {
      this.winner = computer;
      computer.wins ++;
    } else if (human.fighter === 'scissors' && computer.fighter === 'paper') {
      this.winner = human;
      human.wins ++;
    } else if (human.fighter === 'scissors' && computer.fighter === 'rock') {
      this.winner = computer;
      computer.wins ++;
    } else if (human.fighter === this.computerFighter) {
      this.tie = true;
    }
  }
  resetBoard() {

  }
}
