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

var gamePage = document.querySelector('#gamePage');
var classicFighterQueue = document.querySelector('.fighter-display') //will this be gone, DOM problems on reset?
var classicRock = document.querySelector('#rock');
var classicPaper = document.querySelector('#paper');
var classicScissors = document.querySelector('#scissors');
var classicFightButton = document.querySelector('#fightButton')

//Event Listeners
window.addEventListener('load', createGame);
classicGameButton.addEventListener('click', loadClassicGame);
spookyGameButton.addEventListener('click', loadSpookyGame)
gamePage.addEventListener('click', function(event) { //will i need to attach to something besides fighter queue?
  selectFightersClassic(event);
})
gamePage.addEventListener('click', showResults);

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

  //change header to say classic
  //add rules
  //add button to change games, restart(?)
}

function loadSpookyGame() {
  currentGame.type = 'spooky';

  gamePage.classList.remove('hidden');
  homePage.classList.add('hidden');

  //change header to say spooky
  //add rules
  //add button to change games, restart(?)
}

function selectFightersClassic(event) { //make this FOR BOTH CLASSIC AND SPOOKY
  if (allFighterTypes.includes(event.target.id)) {

    humanPlayer.takeTurn(event);
    if (currentGame.type === 'classic') {
      computerPlayer.generateComputerFighter(classicTypes);
    } else if (currentGame.type === 'spooky') {
      computerPlayer.generateComputerFighter(spookyTypes);
    }

    currentGame.humanFighter = humanPlayer.fighter;
    currentGame.computerFighter = computerPlayer.fighter;

    classicFightButton.classList.remove('invisible');
    event.target.classList.add('shake'); //how make only one selected? series of conditoinals?
  }
}

function showResults() {
if (event.target.id === 'fightButton') {
  currentGame.determineWinner(humanPlayer, computerPlayer);
  currentGame.humanWins = humanPlayer.wins;
  currentGame.computerWins = computerPlayer.wins;

  console.log(createRandomNumber(1000));
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
