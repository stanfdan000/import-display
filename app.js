// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

import { games } from './games-data.js';
import { renderGame } from './utils.js';
const container = document.getElementById('games');

 
for (let game of games) {
    const gameL = renderGame(game);
    container.append(gameL);

} 

