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
  //change background
}

function selectFighters(event) { //make this FOR BOTH CLASSIC AND SPOOKY
  if (allFighterTypes.includes(event.target.id)) {
    humanPlayer.takeTurn(event);
    currentGame.humanFighter = humanPlayer.fighter; //necessary?
    fightButton.classList.remove('invisible');
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
if (event.target.id === 'fightButton') {
  currentGame.determineWinner(humanPlayer, computerPlayer);
  currentGame.humanWins = humanPlayer.wins;
  currentGame.computerWins = computerPlayer.wins;



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
