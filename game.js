class Game {
  constructor(human, computer) {
    this.humanPlayer = human;
    this.computerPlayer = computer;
    this.winner = '';
    this.tie = false;
    this.type = '';
  }

  determineWinner() {
    for (var i = 0; i < humanWinConditions[currentGame.type].length; i++) {
      if (this.humanPlayer.fighter.type === this.computerPlayer.fighter.type) {
        this.tie = true;
        this.winner = {
          winner: 'none',
          resultText: 'draw  😐',
        };
        return;
      } else if (humanWinConditions[currentGame.type][i].humanFighter === this.humanPlayer.fighter.type && humanWinConditions[currentGame.type][i].computerFighter.includes(this.computerPlayer.fighter.type)) {
        this.winner = this.humanPlayer;
        this.humanPlayer.wins ++;
        return;
      }
    }
    this.winner = this.computerPlayer;
    this.computerPlayer.wins ++;
  }

  resetBoard() {
    this.humanPlayer.fighter = '';
    this.computerPlayer.fighter = '';
    this.winner = '';
    this.tie = false;
  }
}
