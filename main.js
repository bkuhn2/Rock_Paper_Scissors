//Global Variables
var currentGame;
var humanPlayer;
var computerPlayer;
var classicTypes = ['rock', 'paper', 'scissors'];
var spookyTypes = [];

//HTML elements
var homePage = document.querySelector('#homePage');
var classicGameButton = document.querySelector('#classicGameButton');
var spookyGameButton = document.querySelector('#spookyGameButton');

var classicGamePage = document.querySelector('#classicGamePage');
var classicFighterQueue = document.querySelector('.fighter-display') //will this be gone, DOM problems on reset?
var classicRock = document.querySelector('#rock');
var classicPaper = document.querySelector('#paper');
var classicScissors = document.querySelector('#scissors');
var classicFightButton = document.querySelector('#fightButton')

//Event Listeners
window.addEventListener('load', createGame);
classicGameButton.addEventListener('click', loadClassicGame);
classicFighterQueue.addEventListener('click', function(event) { //will i need to attach to something besides fighter queue?
  selectClassicFighters(event);
})
classicFightButton.addEventListener('click', showResultsClassic);

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

  classicGamePage.classList.remove('hidden');
  homePage.classList.add('hidden');
}

function selectClassicFighters(event) {
  humanPlayer.takeTurn(event);
  computerPlayer.generateComputerFighter(classicTypes);

  currentGame.humanFighter = humanPlayer.fighter;
  currentGame.computerFighter = computerPlayer.fighter;

  classicFightButton.classList.remove('invisible');
  event.target.classList.add('shake');
}

function showResultsClassic() {
  currentGame.determineWinner(humanPlayer, computerPlayer);
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
