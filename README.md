# Rock, Paper, Scissors

### Abstract:
This app lets users play a game of rock, paper, scissors against an automated computer opponent, and includes both the traditional 3 item game and a more complex 5 item game (with a Halloween theme to fit the fall season in which it was made). On page load, the user enters their name and can choose an emoji "token" to accompany it, and then at the home page the user chooses which game mode to play and is taken to that page. The player then selects their "fighter" (the computer simultaneously selects its), and a 'fight' button appears. Upon clicking, the results are displayed and the user is notified of the winner, and will see their (or the computer's) win tallied on the left/right-hand side of the page, respectively. The page automatically resets back to the game board.

At any point, the user can click the 'change game button' to be taken back to the game choice options and can choose to play the 'spooky' mode. The win tallies will not reset, and the totals will carry over if games are switched. The 'spooky' game operates in the same manner as the classic, and the rules are posted in the upper left.

### Installation Instructions:
Clone down this repo and cd into the directory. Then, run **open index.html** to view the app in the browser.

### Preview of App:
- Spooky mode, where there are 5 fighers to choose from instead of the tradtional 3:
![Screen Shot 2022-09-27 at 11 30 53 AM](https://user-images.githubusercontent.com/110054994/192600426-362f5ef3-04e8-46d4-aee2-036c9c25fc3d.png)

### Context:
I am currently a student at Turing in my final week of Mod 1, and have worked on this project for about 6 days, spending roughly 25 hours total.

### Contributors:
This project was made entirely by me, Brett Kuhn
(https://github.com/bkuhn2)

### Learning Goals:
For this project, I worked with Javascript, CSS and HTML; my learning goals were to solidify and demonstrate my understanding of the concepts learned in Mod 1 regarding writing dry Javascript, event delegation, the interplay between the data model and DOM, and breaking down a large project to plan out ahead of time and solve problems step by step.

### Wins + Challenges:
A big challenge for this project was building it from scratch with no guideposts - it helped to write out my steps ahead of time and diagram out what I wanted to pages to look like and what would be a part of the HTML document and what would be created dynamically in the DOM. I started with a rough HTML outline and CSS properties then made sure to have all my game logic written in Javascript. I started with the classic mode before adding the 'spooky' mode. The biggest wins here were updating my Javascript once I had written the basic portion of it in order to make it shorter/more concise and also more dynamic so I could use bracket notation to populate the DOM based off the data model, and also the final visual product with all the tweaks and tinkering in CSS.
