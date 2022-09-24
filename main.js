//Global Variables
var currentGame;
// var humanPlayer; //no longer global?
// var computerPlayer; //no longer global? need be global?
var classicTypes = ['rock', 'paper', 'scissors'];
var spookyTypes = ['skeleton', 'bat', 'ghost', 'scarecrow', 'werewolf'];
var allFighterTypes = ['rock', 'paper', 'scissors', 'skeleton', 'bat', 'ghost', 'scarecrow', 'werewolf'];
var humanWinConditions = [
  {humanFighter: 'rock', computerFighter: 'scissors'},
  {humanFighter: 'paper', computerFighter: 'rock'},
  {humanFighter: 'scissors', computerFighter: 'paper'},
  {humanFighter: 'skeleton', computerFighter: 'ghost'},
  {humanFighter: 'skeleton', computerFighter: 'scarecrow'},
  {humanFighter: 'werewolf', computerFighter: 'skeleton'},
  {humanFighter: 'werewolf', computerFighter: 'bat'},
  {humanFighter: 'ghost', computerFighter: 'werewolf'},
  {humanFighter: 'ghost', computerFighter: 'scarecrow'},
  {humanFighter: 'scarecrow', computerFighter: 'werewolf'},
  {humanFighter: 'scarecrow', computerFighter: 'bat'},
  {humanFighter: 'bat', computerFighter: 'ghost'},
  {humanFighter: 'bat', computerFighter: 'skeleton'}
]


//HTML elements
var homePage = document.querySelector('#homePage');
var classicGameButton = document.querySelector('#classicGameButton');
var spookyGameButton = document.querySelector('#spookyGameButton');
var humanWinsCount = document.querySelector('#humanWinsCount')
var computerWinsCount = document.querySelector('#computerWinsCount')

var gamePage = document.querySelector('#gamePage');
var gameHeader = document.querySelector('#gameHeader');
var gameArea = document.querySelector('.play-game-area');
var gameRules = document.querySelector('dl');
var changeGameButton = document.querySelector('#changeGameButton')

//Event Listeners
window.addEventListener('load', createGame);
classicGameButton.addEventListener('click', loadClassicGame);
spookyGameButton.addEventListener('click', loadSpookyGame)
gamePage.addEventListener('click', function(event) {
  selectFighters(event);
})
gamePage.addEventListener('click', function(event) {
  showResults(event, currentGame);
});
changeGameButton.addEventListener('click', loadChangeGameOptions)

//Functions/Event Handlers
function createGame() { // change this so the players/game spawn on button click and player sectoin reflects player instance
  humanPlayer = new Player('human', '🤡'); //intead of human here, have place for them to input name, icon
  computerPlayer = new Player('computer', '💻');
  currentGame = new Game(humanPlayer, computerPlayer);
}

function createRandomNumber(totalFighters) {
  return Math.floor(Math.random() * totalFighters);
}

function loadClassicGame() {
  currentGame.type = 'classic';

  gamePage.classList.remove('hidden');
  homePage.classList.add('hidden');

  gameHeader.innerText = `${currentGame.type.charAt(0).toUpperCase() + currentGame.type.slice(1)} Game`;
  gameRules.innerHTML = '';
  gameRules.innerHTML += `
    <dt>・<strong>Rock</strong> >>> <strong>scissors</strong>  </dt>
    <dt>・<strong>Scissors</strong> >>> <strong>paper</strong>  </dt>
    <dt>・<strong>Paper</strong> >>> <strong>rock</strong>  </dt>
  `
  gameArea.innerHTML = '';
  gameArea.innerHTML += `
    <div class="fighter-display">
      <img id="rock" class="rock-image" src="./assets/rock.png" alt="Rock">
      <img id="paper" class="paper-image" src="./assets/paper.png" alt="Paper">
      <img id="scissors" class="scissors-image" src="./assets/scissors.png" alt="Scissors">
    </div>
    <div class="fighter-instructions">
      <h2 class="game-text">◀︎  Choose your fighter and <br> click the FIGHT button ▼</h2>
      <button class="invisible" type="button" alt="here-for-formatting">FIGHT</button>
    </div>
    <img class="question-mark" src="./assets/questionmark.png" alt="Question Mark">
  `
}

function loadSpookyGame() {
  currentGame.type = 'spooky';

  gamePage.classList.remove('hidden');
  gamePage.classList.add('spooky-background')
  homePage.classList.add('hidden');

  gameHeader.innerText = `${currentGame.type.charAt(0).toUpperCase() + currentGame.type.slice(1)} Game`;
  gameRules.innerHTML = '';
  gameRules.innerHTML += `
    <dt>・<strong>Skeleton</strong> >>> <strong>ghost</strong> / <strong>scarecrow</strong></dt>
    <dt>・<strong>Werewolf</strong> >>> <strong>skeleton</strong> / <strong>bat</strong></dt>
    <dt>・<strong>Ghost</strong> >>> <strong>werewolf</strong> / <strong>scarecrow</strong></dt>
    <dt>・<strong>Scarecrow</strong> >>> <strong>werewolf</strong> / <strong>bat</strong></dt>
    <dt>・<strong>Bat</strong> >>> <strong>ghost</strong> / <strong>skeleton</strong></dt>
  `
  gameArea.innerHTML = '';
  gameArea.innerHTML += `
    <div class="spooky-fighter-display">
      <img id="skeleton" class="skeleton-image" src="./assets/skeleton.png" alt="Spooky boi">
      <img id="bat" class="bat-image" src="./assets/bat.png" alt="Lazlo">
      <img id="scarecrow" class="scarecrow-image" src="./assets/scarecrow.png" alt="Dr. Crane">
      <img id="ghost" class="ghost-image" src="./assets/ghost.png" alt="G-g-g-ghost!">
      <img id="werewolf" class="werewolf-image" src="./assets/werewolf.png" alt="Awooooo">
    </div>
    <div class="fighter-instructions">
      <h2 class="game-text">◀︎  Choose your fighter and <br> click the FIGHT button ▼</h2>
      <button class="invisible" type="button" alt="here-for-formatting">FIGHT</button>
    </div>
    <img class="blood-splatter" src="./assets/blood.png" alt="Blood Spatter">
  `
}

function selectFighters(event) { //make this FOR BOTH CLASSIC AND SPOOKY
  event.preventDefault(); //necessary?

  if (allFighterTypes.includes(event.target.id)) {
    currentGame.humanPlayer.takeTurn(event);
    currentGame.computerPlayer.takeTurn(event, currentGame.type);

    event.target.parentElement.nextElementSibling.innerHTML = '';
    event.target.parentElement.nextElementSibling.innerHTML += `
      <h2 class="game-text">◀︎  Choose your fighter and <br> click the FIGHT button ▼</h2>
      <button class="fight-button" type="button" id="fightButton">FIGHT</button>
    `

    event.target.classList.add('shake');
    setTimeout(removeShake, 2000) //need be outside selectFighters fxn??
    function removeShake() {
      event.target.classList.remove('shake') //does event need be a param???
    }
  }
}

function createHTMLResults(currentGame) { //name better
  humanWinsCount.innerText = currentGame.humanPlayer.wins;
  computerWinsCount.innerText = currentGame.computerPlayer.wins;
  gameArea.innerHTML = '';
  gameArea.innerHTML += `
    <img id="${currentGame.humanPlayer.fighter}" class="${currentGame.humanPlayer.fighter}-image" src="./assets/${currentGame.humanPlayer.fighter}.png" alt="Rock">
    <h2 class="game-text">${currentGame.winner.resultText}</h2>
    <img id="${currentGame.computerPlayer.fighter}" class="${currentGame.computerPlayer.fighter}-image" src="./assets/${currentGame.computerPlayer.fighter}.png" alt="Question Mark">
  `
}

function showResults(event, currentGame) {
  event.preventDefault();

  if (event.target.id === 'fightButton' && currentGame.type === 'classic') {
    currentGame.determineWinner();
    createHTMLResults(currentGame);
    setTimeout(loadClassicGame, 3000);
    currentGame.resetBoard();
  } else if (event.target.id === 'fightButton' && currentGame.type === 'spooky') {
    currentGame.determineWinner();
    createHTMLResults(currentGame);
    setTimeout(loadSpookyGame, 3000);
    currentGame.resetBoard();
  }
}

function loadChangeGameOptions() {
  gamePage.classList.add('hidden');
  homePage.classList.remove('hidden');
  gamePage.classList.remove('spooky-background')
  //make my input form stuff INVISIBLE HERE, when i do it
}
