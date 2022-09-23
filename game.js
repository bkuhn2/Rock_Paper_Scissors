class Game {
  constructor(human, computer) { //need pass in two players as arguments?? per spec
    this.humanPlayer = human;
    this.computerPlayer = computer;
    this.winner = '';
    this.tie = false;
    this.type = '';
  }
  determineWinner() { //how can we condense this down?
    if (this.humanPlayer.fighter === 'rock' && this.computerPlayer.fighter === 'scissors') {
      this.winner = 'human';
      this.humanPlayer.wins ++;
    } else if (this.humanPlayer.fighter === 'rock' && this.computerPlayer.fighter === 'paper') {
      this.winner = 'computer';
      this.computerPlayer.wins ++;
    } else if (this.humanPlayer.fighter === 'paper' && this.computerPlayer.fighter === 'rock'){
      this.winner = 'human';
      this.humanPlayer.wins ++;
    } else if (this.humanPlayer.fighter === 'paper' && this.computerPlayer.fighter === 'scissors') {
      this.winner = 'computer';
      this.computerPlayer.wins ++;
    } else if (this.humanPlayer.fighter === 'scissors' && this.computerPlayer.fighter === 'paper') {
      this.winner = 'human';
      this.humanPlayer.wins ++;
    } else if (this.humanPlayer.fighter === 'scissors' && this.computerPlayer.fighter === 'rock') {
      this.winner = 'computer';
      this.computerPlayer.wins ++;
    } else if (this.humanPlayer.fighter === this.computerPlayer.fighter) {
      this.tie = true;
      this.winner = '';
    }
  }
  resetBoard() {

  }
}
