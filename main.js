//Global Variables
var currentGame;
var humanPlayer;
var computerPlayer;

//HTML elements
var homePage = document.querySelector('#homePage');
var classicGameButton = document.querySelector('#classicGameButton');
var spookyGameButton = document.querySelector('#spookyGameButton');

var classicGamePage = document.querySelector('#classicGamePage');
var classicFighterQueue = document.querySelector('.fighter-display')
var classicRock = document.querySelector('#rock');
var classicPaper = document.querySelector('#paper');
var classicScissors = document.querySelector('#scissors');
var classicFightButton = document.querySelector('#fightButton')

//Event Listeners
window.addEventListener('load', createGame);
classicGameButton.addEventListener('click', loadClassicGame);
classicFighterQueue.addEventListener('click', function(event) {
  humanPlayer.takeTurn(event);
  unHideFightButton();
});
classicFightButton.addEventListener('click', showResultsClassic);

//Functions/Event Handlers
function createGame() {
  humanPlayer = new Player('human');
  computerPlayer = new Player('computer');
  currentGame = new Game();
}

function loadClassicGame() {
  currentGame.type = 'classic';

  classicGamePage.classList.remove('hidden');
  homePage.classList.add('hidden');
}

function createRandomNumber(totalFighters) {
  return Math.floor(Math.random() * totalFighters);
}

function unHideFightButton() {
  classicFightButton.classList.remove('invisible');
}

function showResultsClassic() {
  currentGame.determineWinner(humanPlayer, computerPlayer);
//if currentGame.winner.playerType === 'human'
//then populate the dom this way
//else if === computer
//then populate this way
//else if currentGame.tie
//then populate this way

//AND update the wins sections accordingly
}
