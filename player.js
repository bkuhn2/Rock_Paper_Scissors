class Player {
  constructor(player, token) {
    this.name = player;
    this.wins = 0;
    this.token = token;
    this.fighter = '';
    this.resultText = `${this.token} ${this.name} wins!`
  }
  takeTurn(event, currentGame) {
    for (var i = 0; i < fighterTypes[currentGame.type].length; i++) {
      if (event.target.id === fighterTypes[currentGame.type][i].type && this.name !== 'Computer') {
        this.fighter = fighterTypes[currentGame.type][i];
        return;
      }
    }
    this.fighter = fighterTypes[currentGame.type][createRandomNumber(fighterTypes[currentGame.type].length)];
    // if (this.name !== 'computer') {
    //   this.fighter = event.target.id;
    // } else if (currentType === 'classic') {
    //   this.fighter = classicTypes[createRandomNumber(classicTypes.length)];
    // } else if (currentType === 'spooky') {
    //   this.fighter = spookyTypes[createRandomNumber(spookyTypes.length)];
    // }
  }
}
