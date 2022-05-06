// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderGame } from '../utils.js';
import { games } from '../games-data.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div><h1>halo</h1><img src="./assets/halo.jpg"><p>halo is a good game</p></div>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGame(games[0]);
    

    //Expect
    // Make assertions about what is expected versus the actual result

    expect.equal(actual.outerHTML, expected);
});
