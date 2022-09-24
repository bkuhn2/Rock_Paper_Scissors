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
  {humanFighter: 'scissors', computerFighter: 'paper'}
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
// var classicFighterQueue = document.querySelector('.fighter-display') //will this be gone, DOM problems on reset?
// var classicRock = document.querySelector('#rock'); am i using these? should i be?
// var classicPaper = document.querySelector('#paper');
// var classicScissors = document.querySelector('#scissors');
var fightButton = document.querySelector('#fightButton')

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

  gameHeader.innerText = `${currentGame.type.charAt(0).toUpperCase() + currentGame.type.slice(1)} Game`;
  gamePage.classList.remove('hidden');
  homePage.classList.add('hidden');
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

  //add rules
  //add button to change games, home
}

function loadSpookyGame() {
  currentGame.type = 'spooky';

  gameHeader.innerText = `${currentGame.type.charAt(0).toUpperCase() + currentGame.type.slice(1)} Game`;
  gamePage.classList.remove('hidden');
  homePage.classList.add('hidden');
  gameArea.innerHTML = '';
  gameArea.innerHTML += `
  <div class="spooky-fighter-display">
    <img id="" class="" src="" alt="">
    <img id="" class="" src="" alt="">
    <img id="" class="" src="" alt="">
    <img id="" class="" src="" alt="">
    <img id="" class="" src="" alt="">
  </div>
  <div class="fighter-instructions">
    <h2 class="game-text">◀︎  Choose your fighter and <br> click the FIGHT button ▼</h2>
    <button class="invisible" type="button" alt="here-for-formatting">FIGHT</button>
  </div>
  <img class="" src="" alt="">
  `
  //add rules
  //add button to change games, restart(?)
  //change background
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
