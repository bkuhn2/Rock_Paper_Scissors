class Player {
  constructor(type, name, token) {
    this.type = type;
    this.name = name;
    this.wins = 0;
    this.token = token;
    this.fighter = '';
    this.resultText = `${this.token} ${this.name} wins!`;
  }
  takeTurn(event, currentGame) {
    for (var i = 0; i < fighterTypes[currentGame.type].length; i++) {
      if (event.target.id === fighterTypes[currentGame.type][i].type && this.type === 'human') {
        this.fighter = fighterTypes[currentGame.type][i];
      } else if (event.target.id === fighterTypes[currentGame.type][i].type && this.type === 'computer') {
        this.fighter = fighterTypes[currentGame.type][createRandomNumber(fighterTypes[currentGame.type].length)];
      }
    }
  }
}
