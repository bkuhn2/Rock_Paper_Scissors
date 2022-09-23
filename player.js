class Player {
  constructor(player, token) {
    this.name = player;
    this.wins = 0;
    this.token = token;
    this.fighter = '';
    this.resultText = `${token} ${player} wins!`
  }
  takeTurn(event, currentType) {
    if (this.name !== 'computer') {
      this.fighter = event.target.id;
    } else if (currentType === 'classic') {
      this.fighter = classicTypes[createRandomNumber(classicTypes.length)];
    } else if (currentType === 'spooky') {
      this.fighter = spookyTypes[createRandomNumber(spookyTypes.length)];
    }
  }
}
