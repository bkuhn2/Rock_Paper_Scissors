//Global Variables
var currentGame;
var humanPlayer;
var computerPlayer;

//HTML elements
var homePage = document.querySelector('#homePage');
var classicGameButton = document.querySelector('#classicGameButton');
var spookyGameButton = document.querySelector('#spookyGameButton');

var classicGamePage = document.querySelector('#classicGamePage');
var classicRock = document.querySelector('#classicRock');
var classicPaper = document.querySelector('#classicPaper');
var classicScissors = document.querySelector('#classicScissors');

//Event Listeners
window.addEventListener('load', createGame);
classicGameButton.addEventListener('click', loadClassicGame)

//Functions/Event Handlers
function createGame() {
  humanPlayer = new Player('human');
  computerPlayer = new Player('computer');
  currentGame = new Game();
}

function loadClassicGame() {
  classicGamePage.classList.remove('hidden');
  homePage.classList.add('hidden');
  currentGame.type = 'classic';
}
