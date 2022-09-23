//Global Variables
var currentGame;
var humanPlayer;
var computerPlayer;
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
function createGame() {
  humanPlayer = new Player('human');
  computerPlayer = new Player('computer');
  currentGame = new Game();
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
  event.preventDefault();
  if (allFighterTypes.includes(event.target.id)) {
    humanPlayer.takeTurn(event);
    currentGame.humanFighter = humanPlayer.fighter; //necessary? happen in take takeTurn fxn with current game as 2nd param?
    fightButton.classList.remove('invisible'); //<-------instead of a hardwired button, make a new one here? or have a fxn invoked taht does that?
    event.target.classList.add('shake'); //how make only one selected? series of conditoinals?
  }
  if (currentGame.type === 'classic' && allFighterTypes.includes(event.target.id)) {
    computerPlayer.generateComputerFighter(classicTypes);
    currentGame.computerFighter = computerPlayer.fighter;
  } else if (currentGame.type === 'spooky' && allFighterTypes.includes(event.target.id)) {
    computerPlayer.generateComputerFighter(spookyTypes);
    currentGame.computerFighter = computerPlayer.fighter; //necessary?
  }
}

function showResults(event) {
  event.preventDefault();
  if (event.target.id === 'fightButton') {
    currentGame.determineWinner(humanPlayer, computerPlayer);
    // currentGame.humanWins = humanPlayer.wins;
    // currentGame.computerWins = computerPlayer.wins; //make these game class based
    humanWinsCount.innerText = currentGame.humanWins;
    computerWinsCount.innerText = currentGame.computerWins;
  }
  if (currentGame.winner.playerType === 'human' && event.target.id === 'fightButton') {
    gameArea.innerHTML = '';
    gameArea.innerHTML += `
    <img id="${currentGame.humanFighter}" class="${currentGame.humanFighter}-image" src="./assets/${currentGame.humanFighter}.png" alt="Rock">
    <h2 class="game-choice-prompt">You win</h2>
    <img id="${currentGame.computerFighter}" class="${currentGame.computerFighter}-image" src="./assets/${currentGame.computerFighter}.png" alt="Question Mark">
    `
  } else if (currentGame.winner.playerType === 'computer' && event.target.id === 'fightButton') {
    gameArea.innerHTML = '';
    gameArea.innerHTML += `
    <img id="${currentGame.humanFighter}" class="${currentGame.humanFighter}-image" src="./assets/${currentGame.humanFighter}.png" alt="Rock">
    <h2 class="game-choice-prompt">You LOSE</h2>
    <img id="${currentGame.computerFighter}" class="${currentGame.computerFighter}-image" src="./assets/${currentGame.computerFighter}.png" alt="Question Mark">
    `
  } else if (currentGame.tie && event.target.id === 'fightButton') {
    gameArea.innerHTML = '';
    gameArea.innerHTML += `
    <img id="${currentGame.humanFighter}" class="${currentGame.humanFighter}-image" src="./assets/${currentGame.humanFighter}.png" alt="Rock">
    <h2 class="game-choice-prompt">draw</h2>
    <img id="${currentGame.computerFighter}" class="${currentGame.computerFighter}-image" src="./assets/${currentGame.computerFighter}.png" alt="Question Mark">
    `
  }
//if currentGame.winner.playerType === 'human'
//then populate the dom this way
//else if === computer
//then populate this way
//else if currentGame.tie
//then populate this way

//OR
//No ifs - just populate to reflect the current Game instance??

//AND update the wins sections accordingly
}
