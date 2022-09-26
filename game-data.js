//------------Global variables for Rock, Paper, Scissors game data---------->

var fighterTypes = {
  classic: [{type: 'rock', img: './assets/rock.png'},
  {type: 'paper', img: './assets/paper.png'},
  {type: 'scissors', img: './assets/scissors.png'}],
  spooky: [{type: 'skeleton', img: './assets/skeleton.png'},
  {type: 'bat', img: './assets/bat.png'},
  {type: 'ghost', img: './assets/ghost.png'},
  {type: 'scarecrow', img: './assets/scarecrow.png'},
  {type: 'werewolf', img: './assets/werewolf.png'}]
};

var humanWinConditions = {
  classic: [{humanFighter: 'rock', computerFighter: ['scissors']},
  {humanFighter: 'paper', computerFighter: ['rock']},
  {humanFighter: 'scissors', computerFighter: ['paper']}],
  spooky: [{humanFighter: 'skeleton', computerFighter: ['ghost', 'scarecrow']},
  {humanFighter: 'werewolf', computerFighter: ['skeleton', 'bat']},
  {humanFighter: 'ghost', computerFighter: ['werewolf', 'scarecrow']},
  {humanFighter: 'scarecrow', computerFighter: ['werewolf', 'bat']},
  {humanFighter: 'bat', computerFighter: ['ghost', 'skeleton']}],
};
