//Global Variables
var currentGame;
var humanPlayer; //no longer global?
var computerPlayer; //no longer global?
var classicTypes = ['rock', 'paper', 'scissors'];
var spookyTypes = ['skeleton', 'bat', 'ghost', 'scarecrow', 'werewolf'];
var allFighterTypes = ['rock', 'paper', 'scissors', 'skeleton', 'bat', 'ghost', 'scarecrow', 'werewolf']

//HTML elements
var homePage = document.querySelector('#homePage');
var classicGameButton = document.querySelector('#classicGameButton');
var spookyGameButton = document.querySelector('#spookyGameButton');
var humanWinsCount = document.querySelector('#humanWinsCount')
var computerWinsCount = document.querySelector('#computerWinsCount')

var gamePage = document.querySelector('#gamePage');
var gameArea = document.querySelector('.play-game-area')
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
  showResults(event);
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
    <h2 class="game-choice-prompt">◀  Choose your fighter and <br> click the FIGHT button above</h2>
  </div>
  <img class="question-mark" src="./assets/questionmark.png" alt="Question Mark">
  `

  //change header to say classic
  //add rules
  //add button to change games, restart(?)
}

function loadSpookyGame() {
  currentGame.type = 'spooky';

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
    <h2 class="game-choice-prompt">◀  Choose your fighter</h2>
  </div>
  <img class="" src="" alt="">
  `
  //change header to say spooky
  //add rules
  //add button to change games, restart(?)
  //change background
}

function selectFighters(event) { //make this FOR BOTH CLASSIC AND SPOOKY
  event.preventDefault(); //necessary?

  if (allFighterTypes.includes(event.target.id)) {
    currentGame.humanPlayer.takeTurn(event);
    currentGame.computerPlayer.takeTurn(event, currentGame.type);
    currentGame.determineWinner();

    fightButton.classList.remove('invisible'); //<-------instead of a hardwired button, make a new one here? or have a fxn invoked taht does that?
    event.target.classList.add('shake'); //how make only one selected? series of conditoinals?
  }
}

function updateWinNumbers() {
  humanWinsCount.innerText = currentGame.humanPlayer.wins;
  computerWinsCount.innerText = currentGame.computerPlayer.wins;
}

function showResults(event) {
  event.preventDefault();

  if (currentGame.winner === 'human' && event.target.id === 'fightButton') {
    updateWinNumbers()
    gameArea.innerHTML = '';
    gameArea.innerHTML += `
    <img id="${currentGame.humanPlayer.fighter}" class="${currentGame.humanPlayer.fighter}-image" src="./assets/${currentGame.humanPlayer.fighter}.png" alt="Rock">
    <h2 class="game-choice-prompt">You win</h2>
    <img id="${currentGame.computerPlayer.fighter}" class="${currentGame.computerPlayer.fighter}-image" src="./assets/${currentGame.computerPlayer.fighter}.png" alt="Question Mark">
    `
  } else if (currentGame.winner === 'computer' && event.target.id === 'fightButton') {
    updateWinNumbers()
    gameArea.innerHTML = '';
    gameArea.innerHTML += `
    <img id="${currentGame.humanPlayer.fighter}" class="${currentGame.humanPlayer.fighter}-image" src="./assets/${currentGame.humanPlayer.fighter}.png" alt="Rock">
    <h2 class="game-choice-prompt">You LOSE</h2>
    <img id="${currentGame.computerPlayer.fighter}" class="${currentGame.computerPlayer.fighter}-image" src="./assets/${currentGame.computerPlayer.fighter}.png" alt="Question Mark">
    `
  } else if (currentGame.tie && event.target.id === 'fightButton') {
    updateWinNumbers()
    gameArea.innerHTML = '';
    gameArea.innerHTML += `
    <img id="${currentGame.humanPlayer.fighter}" class="${currentGame.humanPlayer.fighter}-image" src="./assets/${currentGame.humanPlayer.fighter}.png" alt="Rock">
    <h2 class="game-choice-prompt">draw</h2>
    <img id="${currentGame.computerPlayer.fighter}" class="${currentGame.computerPlayer.fighter}-image" src="./assets/${currentGame.computerPlayer.fighter}.png" alt="Question Mark">
    `
  }
//if currentGame.winner=== 'human'
//then populate the dom this way
//else if === computer
//then populate this way
//else if currentGame.tie
//then populate this way

//OR
//No ifs - just populate to reflect the current Game instance??

//AND update the wins sections accordingly
}
