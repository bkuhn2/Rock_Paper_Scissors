//------------Global Variables For Rock, Paper, Scissors game data---------->

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
  classic: [{humanFighter: 'rock', computerFighter: 'scissors'},
  {humanFighter: 'paper', computerFighter: 'rock'},
  {humanFighter: 'scissors', computerFighter: 'paper'}],
  spooky: [{humanFighter: 'skeleton', computerFighter: 'ghost'},
  {humanFighter: 'skeleton', computerFighter: 'scarecrow'},
  {humanFighter: 'werewolf', computerFighter: 'skeleton'},
  {humanFighter: 'werewolf', computerFighter: 'bat'},
  {humanFighter: 'ghost', computerFighter: 'werewolf'},
  {humanFighter: 'ghost', computerFighter: 'scarecrow'},
  {humanFighter: 'scarecrow', computerFighter: 'werewolf'},
  {humanFighter: 'scarecrow', computerFighter: 'bat'},
  {humanFighter: 'bat', computerFighter: 'ghost'},
  {humanFighter: 'bat', computerFighter: 'skeleton'}]
};

var ruleData = {
  classic: [{winner: 'Rock', loser: 'scissors'},
  {winner: 'Scissors', loser: 'paper'},
  {winner: 'Paper', loser: 'rock'}],
  spooky: [{winner: 'Skeleton', loser: 'ghost, scarecrow'},
  {winner: 'Werewolf', loser: 'skeleton, bat'},
  {winner: 'Ghost', loser: 'werewolf, scarecrow'},
  {winner: 'Scarecrow', loser: 'werewolf, bat'},
  {winner: 'Bat', loser: 'ghost, skeleton'}]
};
