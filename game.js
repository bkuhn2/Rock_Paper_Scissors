class Game {
  constructor(human, computer) { //need pass in two players as arguments?? per spec
    this.humanPlayer = human;
    this.computerPlayer = computer;
    this.winner = '';
    this.tie = false;
    this.type = '';
  }

  determineWinner() { //is there a better way?
    if (this.humanPlayer.fighter.type === this.computerPlayer.fighter.type) {
      this.tie = true;
      this.winner = {
        winner: 'none',
        resultText: 'draw  😐',
      };
      return; //necessary?
    }

    for (var i = 0; i < humanWinConditions[currentGame.type].length; i++) {
      if (humanWinConditions[currentGame.type][i].humanFighter === this.humanPlayer.fighter.type && humanWinConditions[currentGame.type][i].computerFighter === this.computerPlayer.fighter.type) {
        this.winner = this.humanPlayer;
        this.humanPlayer.wins ++;
        return; //necessary?
      }
    }

    this.winner = this.computerPlayer;
    this.computerPlayer.wins ++;
    
    // if (this.humanPlayer.fighter === this.computerPlayer.fighter) {
    //   this.tie = true;
    //     this.winner = {
    //       winner: 'none',
    //       resultText: "draw  😐",
    //     };
    // } else if (this.humanPlayer.fighter === 'rock' && this.computerPlayer.fighter === 'scissors') {
    //   this.winner = this.humanPlayer;
    //   this.humanPlayer.wins ++;
    // } else if (this.humanPlayer.fighter === 'paper' && this.computerPlayer.fighter === 'rock') {
    //   this.winner = this.humanPlayer;
    //   this.humanPlayer.wins ++;
    // } else if (this.humanPlayer.fighter === 'scissors' && this.computerPlayer.fighter === 'paper') {
    //   this.winner = this.humanPlayer;
    //   this.humanPlayer.wins ++;
    // } else {
    //   this.winner = this.computerPlayer;
    //   this.computerPlayer.wins ++;
    // }

  }

  resetBoard() {
    this.humanPlayer.fighter = '';
    this.computerPlayer.fighter = '';
    this.winner = '';
    this.tie = false;
  }
}


//OLD WORKING DETERMINE WINNER CODE, BUT TOO LONG
// if (this.humanPlayer.fighter === 'rock' && this.computerPlayer.fighter === 'scissors') {
//   this.winner = this.humanPlayer;
//   this.humanPlayer.wins ++;
// } else if (this.humanPlayer.fighter === 'rock' && this.computerPlayer.fighter === 'paper') {
//   this.winner = this.computerPlayer;
//   this.computerPlayer.wins ++;
// } else if (this.humanPlayer.fighter === 'paper' && this.computerPlayer.fighter === 'rock'){
//   this.winner = this.humanPlayer;
//   this.humanPlayer.wins ++;
// } else if (this.humanPlayer.fighter === 'paper' && this.computerPlayer.fighter === 'scissors') {
//   this.winner = this.computerPlayer;
//   this.computerPlayer.wins ++;
// } else if (this.humanPlayer.fighter === 'scissors' && this.computerPlayer.fighter === 'paper') {
//   this.winner = this.humanPlayer;
//   this.humanPlayer.wins ++;
// } else if (this.humanPlayer.fighter === 'scissors' && this.computerPlayer.fighter === 'rock') {
//   this.winner = this.computerPlayer;
//   this.computerPlayer.wins ++;
// } else if (this.humanPlayer.fighter === this.computerPlayer.fighter) {
//   this.tie = true;
//   this.winner = {
//     winner: 'none',
//     resultText: "draw  😐",
//   };
// }
