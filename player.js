class Player {
  constructor(player, token) {
    this.name = player;
    this.wins = 0;
    this.fighter = '';
    this.token = token; //i don't have a token - where does this come into game in comp
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
