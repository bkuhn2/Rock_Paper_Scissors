class Game {
  constructor(human, computer) {
    this.humanPlayer = human;
    this.computerPlayer = computer;
    this.winner = '';
    this.tie = false;
    this.type = '';
  }

  determineWinner() {
    if (this.humanPlayer.fighter.type === this.computerPlayer.fighter.type) {
      this.tie = true;
      this.winner = {
        winner: 'none',
        resultText: 'draw  😐',
      };
      return; //necessary?
    }

    for (var i = 0; i < humanWinConditions[currentGame.type].length; i++) {
      if (humanWinConditions[currentGame.type][i].humanFighter === this.humanPlayer.fighter.type && humanWinConditions[currentGame.type][i].computerFighter.includes(this.computerPlayer.fighter.type)) {
        this.winner = this.humanPlayer;
        this.humanPlayer.wins ++;
        //could i put the tie in here?????
        return; //necessary?
      }
    }

    this.winner = this.computerPlayer;
    this.computerPlayer.wins ++;

//^^^ if we did have the plaers in one key as an array,
//could we loop through the array and check then have an if then statment??? idk maybe
  }

  resetBoard() {
    this.humanPlayer.fighter = '';
    this.computerPlayer.fighter = '';
    this.winner = '';
    this.tie = false;
  }
}
