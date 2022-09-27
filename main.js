//---------------------------Global Variable(s)---------------------------->
var currentGame;



//-----------------------------HTML Elements------------------------------->
var homePage = document.querySelector('#homePage');
var classicGameButton = document.querySelector('#classicGameButton');
var spookyGameButton = document.querySelector('#spookyGameButton');
var chooseGameArea = document.querySelector('.choose-game-area');
var typeNameArea = document.querySelector('.name-human-player-area');
var nameInputBox = document.querySelector('#userNameInput');
var tokenInputBox = document.querySelector('#userEmojiInput');
var namingButton = document.querySelector('#updateNameButton');

var humanWinsCount = document.querySelector('#humanWinsCount');
var computerWinsCount = document.querySelector('#computerWinsCount');
var humanName = document.querySelector('#humanName');
var humanToken = document.querySelector('#humanToken');

var gamePage = document.querySelector('#gamePage');
var gameHeader = document.querySelector('#gameHeader');
var gameRules = document.querySelector('dl');
var changeGameButton = document.querySelector('#changeGameButton');
var gameAreas = {
  classic: classicGameArea = document.querySelector('.classic-game-area'),
  spooky: spookyGameArea = document.querySelector('.spooky-game-area')
};
var resultsAreas = {
  classic: classicResultsArea = document.querySelector('.classic-results-area'),
  spooky: spookyResultsArea = document.querySelector('.spooky-results-area')
};
var fighterDisplays = {
  classic: classicFighterDisplay = document.querySelector('.classic-fighter-display'),
  spooky: spookyFighterDisplay = document.querySelector('.spooky-fighter-display')
};
var fighterInstructions = {
  classic: classicFighterInstructions = document.querySelector('.classic-fighter-instructions'),
  spooky: spookyFighterInstructions = document.querySelector('.spooky-fighter-instructions')
}




//-----------------------------Event Listeners------------------------------>
window.addEventListener('load', createGame);
namingButton.addEventListener('click', function() {
  updatePlayerName(currentGame);
  loadHomePage(currentGame);
});
classicGameButton.addEventListener('click', function() {
  setGameType(currentGame);
  loadGame(currentGame);
});
spookyGameButton.addEventListener('click', function() {
  setGameType(currentGame);
  loadGame(currentGame);
});
gamePage.addEventListener('click', function(event) {
  selectFighters(event, currentGame);
});
gamePage.addEventListener('click', function(event) {
  showResults(event, currentGame);
});
changeGameButton.addEventListener('click', loadChangeGameOptions)




//---------------------------Functions, Event Handlers-------------------->
function createGame() {
  humanPlayer = new Player('human');
  computerPlayer = new Player('computer', 'Computer', '💻');
  currentGame = new Game(humanPlayer, computerPlayer);
}

function updatePlayerName(currentGame) {
  currentGame.humanPlayer.name = nameInputBox.value;
  currentGame.humanPlayer.token = tokenInputBox.value;
  currentGame.humanPlayer.resultText = `${tokenInputBox.value} ${nameInputBox.value} wins!`;

  humanName.innerText = nameInputBox.value;
  humanToken.innerText = tokenInputBox.value;
}

function loadHomePage(currentGame) {
  typeNameArea.classList.add('hidden');
  chooseGameArea.classList.remove('hidden');
}

function createRandomNumber(totalFighters) {
  return Math.floor(Math.random() * totalFighters);
}

function setGameType(currentGame) {
  currentGame.type = event.target.innerText;
}

function loadGameHeader(currentGame) {
  gameHeader.innerText = `${currentGame.type.charAt(0).toUpperCase() + currentGame.type.slice(1)} Game`;
  gameRules.innerHTML = '';
  for (var i = 0; i < humanWinConditions[currentGame.type].length; i++) {
    gameRules.innerHTML += `
      <dt><strong>${humanWinConditions[currentGame.type][i].humanFighter}</strong> >> <strong>${humanWinConditions[currentGame.type][i].computerFighter.join(' & ')}</strong>  </dt>
    `;
  }
}

function loadGame(currentGame) {
  homePage.classList.add('hidden');
  gamePage.classList.remove('hidden');
  gamePage.classList.add(`${currentGame.type}-background`);
  gameAreas[currentGame.type].classList.remove('hidden');
  resultsAreas[currentGame.type].classList.add('hidden');

  loadGameHeader(currentGame);

  fighterDisplays[currentGame.type].innerHTML = '';
  for (var i = 0; i < fighterTypes[currentGame.type].length; i++) {
    fighterDisplays[currentGame.type].innerHTML += `
      <img id="${fighterTypes[currentGame.type][i].type}" class="${currentGame.type}-image" src="${fighterTypes[currentGame.type][i].img}" alt="${fighterTypes[currentGame.type][i].type}">
    `;
  }

  fighterInstructions[currentGame.type].innerHTML = '';
  fighterInstructions[currentGame.type].innerHTML += `
    <h2 class="game-text">◀  Choose your fighter and <br> click the FIGHT button ▼</h2>
  `
}

function removeShake(event) {
  event.target.classList.remove('shake');
}

function selectFighters(event, currentGame) {
  event.preventDefault(); //necessary?

  var currentFighterTypes = [];
  for (var i = 0; i < fighterTypes[currentGame.type].length; i++) {
    currentFighterTypes.push(fighterTypes[currentGame.type][i].type)
  }

  if (currentFighterTypes.includes(event.target.id)) {
    currentGame.humanPlayer.takeTurn(event, currentGame);
    currentGame.computerPlayer.takeTurn(event, currentGame);

    event.target.parentElement.nextElementSibling.innerHTML = '';
    event.target.parentElement.nextElementSibling.innerHTML += `
      <h2 class="game-text">◀︎  Choose your fighter and <br> click the FIGHT button ▼</h2>
      <button class="fight-button" type="button" id="fightButton">FIGHT</button>
    `;

    event.target.classList.add('shake');

    setTimeout(function() {
      removeShake(event);
    }, 2000);
  }
}

function showResults(event, currentGame) {
  event.preventDefault();

  if (event.target.id === 'fightButton') {
    currentGame.determineWinner();

    humanWinsCount.innerText = currentGame.humanPlayer.wins;
    computerWinsCount.innerText = currentGame.computerPlayer.wins;

    gameAreas[currentGame.type].classList.add('hidden');
    resultsAreas[currentGame.type].classList.remove('hidden');
    resultsAreas[currentGame.type].innerHTML = '';
    resultsAreas[currentGame.type].innerHTML += `
    <img id="${currentGame.humanPlayer.fighter.type}" class="${currentGame.type}-image" src="${currentGame.humanPlayer.fighter.img}" alt="${currentGame.humanPlayer.fighter.type}">
    <h2 class="game-text">${currentGame.winner.resultText}</h2>
    <img id="${currentGame.computerPlayer.fighter.type}" class="${currentGame.type}-image" src="${currentGame.computerPlayer.fighter.img}" alt="${currentGame.computerPlayer.fighter.type}">
    `;

    setTimeout(function() {
      loadGame(currentGame);
    }, 2700);

    currentGame.resetBoard();
  }
}

function loadChangeGameOptions() {
  gameAreas[currentGame.type].classList.add('hidden');
  gamePage.classList.remove(`${currentGame.type}-background`);
  gamePage.classList.add('hidden');
  homePage.classList.remove('hidden');
}
