const readline = require("readline-sync");

const userName = readline.question("what is our name? ");
console.log(`Alright ${userName}, let's see if you can escape from this room: `);    //displays the name entered and explains to the user what is going to take place.

let playGame;                                                 //calls playGame and sets it as a variable.
let foundKey = false;                                         //calls foundKey and sets it as a variable and initally set to false.
let incorrectAttempts = 0;                                    //keeps track of number of incorrect attempts to play game correctly.

function escapingFromRoom(){                                  //declares escaptingFromRoom as a function.
//  console.log('escaping 1', playGame);
  playGame = readline.question(`${userName}, what would you like to do?: FK: find the key, OD: open the door, P: explore hole in the wall or Q: stop playing game. `);
//  console.log('escaping 2', playGame)
  solvingGame();                                              //calls the function solving Game.
};

function solvingGame(){  
    if(playGame === 'FK'){                                      //If user chooses FK goes to winGame function.
      foundKey = true;                                          //changes foundKey to true so if selected after wrong choices made it keeps running program.
      playGame = ("winGame");                                   //assigns winGame to playGame.
      } else if (playGame === 'OD'){                            //if user types OD verifies if true and if so message below will be displayed.
        incorrectAttempts++;                                    //logs occurence if it is an incorrect attempt into memory to be displayed at end of game.
        console.log(`SORRY ${userName}, the door is locked. You need to find the key to escape.`);
      } else if (playGame === 'P'){                             //if user types P verifies if true and if so prints message below.
        incorrectAttempts++;                                    //logs occurence if it is an incorrect attempt into memory to be displayed at end of game.
        console.log(`Sorry ${userName}, NOTHING EXCITING in the hole. BORED YET and READY TO ESCAPE from the room? hmmm: THINK, WHAT is needed to get out.  Possibly a KEY!!. Let's try again.`);  
      } else if (playGame === 'Q'){                             //if user types Q verifies if true and if so goes to endGame function.
        playGame = 'endGame';                                   //assigns endGame to playGame.
      };
};

//   startTurn()
// };


// function startTurn(){
//   // start turn
//     // logic here

//   // end turn
//   escapingFromRoom()
// }


// This is the main functioning loop for the game to work.
 while (playGame !== "winGame" && playGame !== "endGame"){     //While the game is not equal to either winGame or endGame the game continues.
   escapingFromRoom();                                         //calls escapingFromRoom function and asks questions again.
 };

if(playGame === "winGame" && playGame !== "endGame"){
console.log("Congratulations " + userName + ", \n YOU have FOUND THE KEY and may leave the room. \n the number of incorrect attempts to answer is was: " + incorrectAttempts + " "); //once user has chosen FK after a few incorrect answers it displays and ends the game.
};

if(playGame === "endGame"){
  console.log("Please come back and try this game later, \n the number of incorrect attempts to answer is was: " + incorrectAttempts + " ");
};

//escapingFromRoom()