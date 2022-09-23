class Game {
  constructor() { //need pass in two players as arguments?? per spec
    this.humanFighter = '';
    this.computerFighter = '';
    this.winner = '';
    this.tie = false;
    this.type = '';
    // this.humanWins = 0; is this redundant???
    // this.computerWins = 0; is this redundant???
  }
  determineWinner(human, computer) { //how can we condense this down?
    if (this.humanFighter === 'rock' && this.computerFighter === 'scissors') {
      this.winner = 'human';
      human.wins ++;
    } else if (this.humanFighter === 'rock' && this.computerFighter === 'paper') {
      this.winner = 'computer';
      computer.wins ++;
    } else if (this.humanFighter === 'paper' && this.computerFighter === 'rock'){
      this.winner = 'human';
      human.wins ++;
    } else if (this.humanFighter === 'paper' && this.computerFighter === 'scissors') {
      this.winner = 'computer';
      computer.wins ++;
    } else if (this.humanFighter === 'scissors' && this.computerFighter === 'paper') {
      this.winner = 'human';
      human.wins ++;
    } else if (this.humanFighter === 'scissors' && this.computerFighter === 'rock') {
      this.winner = 'computer';
      computer.wins ++;
    } else if (this.humanFighter === this.computerFighter) {
      this.tie = true;
      this.winner = '';
    }
  }
  resetBoard() {

  }
}
