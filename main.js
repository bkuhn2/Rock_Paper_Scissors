//Global Variables
var currentGame;
var humanPlayer;
var computerPlayer;

//HTML elements
var homePage = document.querySelector('#homePage');
var classicGameButton = document.querySelector('#classicGameButton')
var spookyGameButton = document.querySelector('#spookyGameButton')

//Event Listeners
window.addEventListener('load', createGame);


//Functions/Event Handlers
function createGame() {
  humanPlayer = new Player('human');
  computerPlayer = new Player('computer');
  currentGame = new Game();
}
